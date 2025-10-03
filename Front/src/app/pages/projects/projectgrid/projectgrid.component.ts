import { Component, OnInit } from '@angular/core';

import { Project } from '../project.model';

import { projectData } from '../projectdata';
import { ChefServiceService } from '../chef-service.service';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projectgrid',
  templateUrl: './projectgrid.component.html',
  styleUrls: ['./projectgrid.component.scss']
})

/**
 * Projects-grid component
 */
export class ProjectgridComponent implements OnInit {
  term:string
  p:any
  currentNiveau: number;

  // bread crumb items
  breadCrumbItems: Array<{}>;

  projectData: Project[];
listDemande:any
type:any
demandeForm:FormGroup
  constructor(private chefServ:ChefServiceService,private token:TokenStorage,private fb:FormBuilder,private modalService: NgbModal) { }

  ngOnInit() {
    //const user = this.token.getUser();
    //console.log("User object:", user); // Debug user object
   // this.currentNiveau = user.niveau; 
   this.currentNiveau = this.token.getNiveauFromToken(); // <-- Add this
   console.log("Current niveau:", this.currentNiveau); // Verify niveau value
    
    this.loadDemandes();
    this.breadCrumbItems = [{ label: 'Projects' }, { label: 'Projects Grid', active: true }];

    this.projectData = projectData;
    
    this.demandeForm=this.fb.group({
      idConge:[""],
      dateCng :[""],
dateDebut : [""],
dateFin : [""],
repChef : [""],
statut : [""]
    })
  }

  loadDemandes() {
    if (this.currentNiveau >= 1 && this.currentNiveau <= 3) {
      const serviceId = Number(this.token.getUser().serv.idService); // From stored user data
      this.chefServ.getDemandesByNiveau(serviceId, this.currentNiveau)
        .subscribe((data) => {
          this.listDemande = data;
        });
    }
  }
  getDemandeChef() {
    const serviceId = this.token.getUser().serv.idService; // From stored user data
    this.chefServ.getDemandeChef(serviceId).subscribe((data) => {
      this.listDemande = data;
      console.log(this.listDemande);
    });
  }
openModal(targetModal, user) {
  this.modalService.open(targetModal, {
   centered: true,
   backdrop: 'static'
  });
 
  this.demandeForm.patchValue({
    idConge: user.idConge,

    dateCng: user.dateCng,
    dateDebut: user.dateDebut,
    dateFin: user.dateFin,
    repChef: user.repChef,
    statut: user.statut,
  

  });
  // this.lib=this.userForm.get('lib_demande').value
  // console.log(this.lib)



 }
 updateDemande() {
  const id = this.demandeForm.value.idConge;
  const decision = this.demandeForm.value.repChef;
  const serviceId = this.token.getUser().serv.idService;

  if (![1, 2, 3].includes(this.currentNiveau)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Approver Level',
      text: 'Your account is not configured to approve requests!'
    });
    return;
  }

  switch (this.currentNiveau) {
    case 3:
      this.chefServ.approveNiveau3(id, decision).subscribe(() => {
        this.loadDemandes(); // Refresh approval list
        Swal.fire({ 
          position: 'top-end',
          icon: 'success',
          title: 'Votre Reponse à été bien enregistrer !',
          showConfirmButton: false,
          timer: 2000
        });
        this.chefServ.getrepDemandeNiveau3(serviceId).subscribe((data) => {
          // Optional: Update historique list if needed
        });
      });
      break;
    case 2:
      this.chefServ.approveNiveau2(id, decision).subscribe(() => {
        this.loadDemandes();
        Swal.fire({ 
          position: 'top-end',
          icon: 'success',
          title: 'Votre Reponse à été bien enregistrer !',
          showConfirmButton: false,
          timer: 2000
        });
        this.chefServ.getrepDemandeNiveau2(serviceId).subscribe((data) => {});
      });
      break;
    case 1:
      this.chefServ.approveNiveau1(id, decision).subscribe(() => {
        this.loadDemandes();
        Swal.fire({ 
          position: 'top-end',
          icon: 'success',
          title: 'Votre Reponse à été bien enregistrer !',
          showConfirmButton: false,
          timer: 2000
        });
        this.chefServ.getrepDemandeNiveau1(serviceId).subscribe((data) => {});
      });
      break;
    default:
      console.error("Invalid niveau:", this.currentNiveau);
  }
  this.modalService.dismissAll();
}
}
