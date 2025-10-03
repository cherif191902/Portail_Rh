import { Component, OnInit } from '@angular/core';
import { PointageService } from 'src/app/pages/dashboards/default/PointageService.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { GroupedPointage, Pointage } from 'src/app/pages/tables/advancedtable/advanced.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-pointages',
  templateUrl: './pointages.component.html',
  styleUrls: ['./pointages.component.scss']
})
export class PointagesComponent implements OnInit {
  groupedPointages$: Observable<GroupedPointage[]>;
  isLoadingPointages = false;
  selectedDate: Date = new Date();
  dateFilterEnabled = false;
  pointages: any[] = [];

  constructor(
    private pointageService: PointageService,
    public token: TokenStorage
  ) { }

  ngOnInit(): void {
    this.loadPointages();
  }

  // Move all pointage-related methods from default.component.ts here
 private loadPointages() {
    this.isLoadingPointages = true;
    
    let dateParam: string | undefined;
  
    if (this.dateFilterEnabled) {
      dateParam = this.selectedDate.toISOString().split('T')[0];
    }
  
    this.pointageService.getMyPointages(dateParam).subscribe({
      next: (data: Pointage[]) => {
        // Wrap the grouped data in an observable
        this.groupedPointages$ = of(this.groupByMatricule(data));
        this.isLoadingPointages = false;
      },
      error: () => {
        this.isLoadingPointages = false;
        console.error('Error loading pointages');
      }
    });
  }
    private groupByMatricule(pointages: Pointage[]): GroupedPointage[] {
      const groups = new Map<string, GroupedPointage>();
      
      pointages.sort((a, b) => 
        a.matricule.localeCompare(b.matricule) || 
        new Date(a.datePoint).getTime() - new Date(b.datePoint).getTime()
      );
  
      pointages.forEach(p => {
        if (!groups.has(p.matricule)) {
          groups.set(p.matricule, {
            matricule: p.matricule,
            pointages: [],
            totalEntries: 0
          });
        }
        const group = groups.get(p.matricule)!;
        group.pointages.push(p);
        group.totalEntries++;
      });
  
      return Array.from(groups.values());
    }
 onDateChange(newDate: Date) {
  this.selectedDate = newDate;
  this.dateFilterEnabled = true; // Enable filtering
  this.loadPointages();
}

loadToday() {
  this.selectedDate = new Date();
  this.dateFilterEnabled = true; // Enable filtering for today
  this.loadPointages();
}
  formatTime(heures: number, minutes: number): string {
  return `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
 getStatusDisplay(status: string): string {
  switch(status?.toUpperCase()) {
    case 'PRESENT': return 'Present';
    case 'HALF_DAY': return 'Demi-journée';
    case 'ABSENT': return 'Absent';
    default: return status;
  }
}
}