import { Component, OnInit } from '@angular/core';
import { CongeService } from '../tables/conge.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge-validate-chef',
  templateUrl: './conge-validate-chef.component.html',
  styleUrls: ['./conge-validate-chef.component.scss']
})
export class CongeValidateChefComponent implements OnInit {
  demandes: any[] = [];

  constructor(private chefService: CongeService) { }

  ngOnInit(): void {
    this.loadPending();
  }

  loadPending() {
    this.chefService.getDemandesPourChef().subscribe((data: any) => this.demandes = data);
  }

  decision(id: number, accept: boolean) {
    const dto = { idConge: id, accepted: accept };
    this.chefService.decisionChef(dto).subscribe(() => {
      Swal.fire('OK', 'Décision enregistrée', 'success');
      this.loadPending();
    }, err => Swal.fire('Erreur', err?.message || err, 'error'));
  }
}
