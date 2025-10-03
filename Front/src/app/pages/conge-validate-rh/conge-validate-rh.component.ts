import { Component, OnInit } from '@angular/core';
import { CongeService } from '../../pages/tables/conge.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conge-validate-rh',
  templateUrl: './conge-validate-rh.component.html',
  styleUrls: ['./conge-validate-rh.component.scss']
})
export class CongeValidateRhComponent implements OnInit {
  demandes: any[] = [];

  constructor(private congeService: CongeService) { }

  ngOnInit(): void { this.loadPending(); }

  loadPending() { this.congeService.getDemandesPourRh().subscribe((d: any) => this.demandes = d); }

  decision(id: number, accept: boolean) {
    const dto = { idConge: id, accepted: accept };
    this.congeService.decisionRh(dto).subscribe(() => {
      Swal.fire('OK', 'Décision RH enregistrée', 'success');
      this.loadPending();
    }, err => Swal.fire('Erreur', err?.message || err, 'error'));
  }
}
