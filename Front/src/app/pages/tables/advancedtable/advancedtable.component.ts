import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { GroupedPointage, Pointage} from './advanced.model';

import Swal from 'sweetalert2';

import { PointageService} from './PointageService.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-advancedtable',
  templateUrl: './advancedtable.component.html',
  styleUrls: ['./advancedtable.component.scss'],
  providers: [PointageService, DecimalPipe]
})
export class AdvancedtableComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  pointages$: Observable<Pointage[]>;
  total$: Observable<number>;
  selectedFile: File | null = null;
  loading = false;
  errorMessage = '';
  successMessage = '';
  p: any;
  pageSize = 10;
  groupedPointages$: Observable<GroupedPointage[]>;
 selectedDate: Date = new Date();
  isLoading = false;
  isValidated = false;
  validating = false;
   get validatedDates(): { [key: string]: boolean } {
    const stored = localStorage.getItem('validatedDates');
    return stored ? JSON.parse(stored) : {};
  }
   set validatedDates(value: { [key: string]: boolean }) {
    localStorage.setItem('validatedDates', JSON.stringify(value));
  }
  

  constructor(public service: PointageService) {
    this.pointages$ = service.pointages$;
    this.total$ = service.total$;
    this.groupedPointages$ = service.pointages$.pipe(map(pointages => this.groupByMatricule(pointages))
    );
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
  
  ngOnInit() {
    this.breadCrumbItems = [
      { label: 'Pointage' }, 
      { label: 'Gestion des Pointages', active: true }
    ];
    this.loadPointages();
  }



  
  loadPointages(forceRefresh = false) {
    this.isLoading = true;
    this.service.getPointagesByDate(this.selectedDate, forceRefresh).subscribe({
      complete: () => this.isLoading = false,
      error: () => this.isLoading = false
    });
  }




  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }





  uploadFile() {
    if (!this.selectedFile) return;

    this.loading = true;
    
    this.service.uploadFile(this.selectedFile).subscribe({
      next: () => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Import réussi!',
          text: 'Les pointages ont été importés avec succès',
          showConfirmButton: false,
          timer: 2000
        });
        this.service.getAllPointages().subscribe(); // Refresh data
      },
      error: (err) => {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Erreur d\'importation',
          text: err.error?.message || 'Une erreur est survenue lors de l\'import',
          showConfirmButton: false,
          timer: 3000
        });
      },
      complete: () => this.loading = false
    });
    this.p = 1;
  }
  private calculateDurations(group: GroupedPointage): void {
    for(let i = 0; i < group.pointages.length; i++) {
      if(i > 0) {
        const prev = new Date(group.pointages[i-1].datePoint);
        const current = new Date(group.pointages[i].datePoint);
        const diff = current.getTime() - prev.getTime();
        
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        group.pointages[i].duration = 
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      }
    
    }


}




formatTime(heures: number, minutes: number): string {
  return `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}





onDateChange(newDate: Date) {
    this.selectedDate = newDate;
    this.loadPointages();
  }





  loadToday() {
    this.selectedDate = new Date();
    this.loadPointages();
  }





validatePointages() {
  const dateKey = this.selectedDate.toISOString().split('T')[0];
  
  // Check if there are any pointages for the selected date
  const currentPointages = this.service.pointages.value;
  if (!currentPointages || currentPointages.length === 0) {
    Swal.fire('Erreur', 'Aucun pointage existe pour cette date', 'error');
    return;
  }

  this.validating = true;
  this.service.validatePointages(this.selectedDate).subscribe({
    next: () => {
      const dates = this.validatedDates;
      dates[dateKey] = true;
      this.validatedDates = dates; // Save to localStorage
      this.loadPointages(true);
      Swal.fire('Success', 'Pointages validés avec succès', 'success');
    },
    error: (err) => {
      Swal.fire('Error', err.message || 'Échec de la validation', 'error');
    },
    complete: () => this.validating = false
  });
}
  getStatusDisplay(status: string): string {
  switch(status?.toUpperCase()) {
    case 'PRESENT': return 'Present';
    case 'HALF_DAY': return 'Demi-journée';
    case 'ABSENT': return 'Absent';
    default: return status;
  }
}

formatMinutes(minutes: number | undefined | null): string {
  if (minutes == null || isNaN(minutes)) return '-';
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours}h ${mins}m`;
}
isDateValidated(): boolean {
  const dateKey = this.selectedDate.toISOString().split('T')[0];
  return !!this.validatedDates[dateKey];
}

}