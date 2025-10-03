import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import Swal from 'sweetalert2';
import { CongeService } from '../conge.service';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})

/**
 * Basic table component
 */
export class BasicComponent implements OnInit {
  // bread crumb items
  lib:any

  breadCrumbItems: Array<{}>;
typeCng:any
Cng:any
solde:any
dateCng=new Date()
dateError: boolean = false;
filtreDateDebut: string = '';
filtreDuree: number | null = null;
sancForm:FormGroup
term: string = '';
dateDebutMin: string = '';
dateDebutMax: string = '';
isChefNiveau1: boolean = false;
isPersonnel: boolean = false;
selectedTypeMaxDays: number | null = null;
durationExceeds = false;

  constructor(private modalService: NgbModal,private formBuilder : FormBuilder
    ,private congeService:CongeService,private token:TokenStorage,private datePipe: DatePipe) { }

  formConge:FormGroup

    ngOnInit(): void {
      const user = this.token.getUser();
      this.isChefNiveau1 = user?.niveau === 1 && user.roles.some(r => r.nomRole === 'ROLE_CHEF');
  this.isPersonnel = user?.roles.some(r => r.nomRole === 'ROLE_PERSONNEL');
      console.log('User object from token:', this.token.getUser()); // Retrieve user info from token
      console.log('Token from token:', this.token.getToken()); // Retrieve token from token
      console.log('Token from token:', this.token.getUser().matriculeP); // Retrieve token from token
      this.breadCrumbItems = [{ label: 'Congé' }, { label: 'Gestion des congés', active: true }];
this.getTypeConge()
this.getCongeByMat()
console.log(this.datePipe.transform(this.dateCng,'yyyy-MM-dd HH:mm:ss'))
this.formConge = this.formBuilder.group({
  
  dateCng: [this.datePipe.transform(this.dateCng, 'yyyy-MM-dd HH:mm:ss')],
  personnel: this.formBuilder.group({
    idEmploye: [this.token.getUser()?.idEmploye]
  }),
  dateDebut: ['', Validators.required],
  dateFin: ['', Validators.required],
  duree: ['', Validators.required],
  // 
  typeConge: this.formBuilder.group({
      idType: ['', Validators.required]
  })
});

  this.sancForm=this.formBuilder.group({
    dateSanction:[this.datePipe.transform(this.dateCng, 'yyyy-MM-dd')],
    matriculeP:[this.token.getUser().matriculeP],
    personnel:this.formBuilder.group({
      idEmploye:['1']
    }),
  })


    this.formConge.get('typeConge.idType').valueChanges.subscribe(id => {
    const selectedType = this.typeCng.find(t => t.idType == id);
    this.selectedTypeMaxDays = selectedType?.maxAllowedDays || null;
    this.checkDuration();
  });
    }
    openModalAjout(content: any) {
      this.modalService.open(content, { size: 'lg', centered: true });
  
    }
    checkDuration() {
  if (this.selectedTypeMaxDays && this.formConge.get('duree').value) {
    this.durationExceeds = this.formConge.get('duree').value > this.selectedTypeMaxDays;
  } else {
    this.durationExceeds = false;
  }
}
    filteredCng() {
      return this.Cng
        .filter(i =>
          (!this.term || (
            i.matriculeP?.toLowerCase().includes(this.term.toLowerCase()) ||
            i.typeConge?.nomTypeconge?.toLowerCase().includes(this.term.toLowerCase())
          ))
        )
        .filter(i => {
          const date = new Date(i.dateDebut);
          const min = this.dateDebutMin ? new Date(this.dateDebutMin) : null;
          const max = this.dateDebutMax ? new Date(this.dateDebutMax) : null;
          return (!min || date >= min) && (!max || date <= max);
        });
    }
    
  openModalUpdate(content,conge) {
    this.modalService.open(content, { size: 'lg', centered: true });

    this.formConge.patchValue({
      idConge: conge.idConge,
      dateCng:conge.dateCng,
      matriculeP: conge.matriculeP,
      dateDebut: conge.dateDebut,
      dateFin: conge.dateFin,
      duree: conge.duree,
      statut: conge.statut,
      typeConge: {
        idType: conge.typeConge.idType
      }
    });
    this.lib=this.formConge.get('matriculeP').value

    console.log(this.lib)
    console.log(this.formConge.value)
  }


  getTypeConge() {
  
    this.congeService.GetTypeConge().subscribe((data: any) => {
      this.typeCng = data;
      console.log( this.typeCng)
    });
  }

  getCongeByMat() {
    console.log(this.token.getUser().matriculeP)
    this.congeService.GetCongeByMat(this.token.getUser().matriculeP).subscribe((data: any) => {
      this.Cng= [...data]; 
    });
  }

  ajoutConge(){

     if (this.durationExceeds) {
    Swal.fire({
      icon: 'error',
      title: 'Erreur',
      text: `La durée dépasse le maximum autorisé pour ce type de congé (Max: ${this.selectedTypeMaxDays} jours)`
    });
    return;
  }
    console.log(this.formConge.value)
    const formData = { ...this.formConge.value };
    this.congeService.getMaxSolde(this.token.getUser().matriculeP).subscribe((data)=>{
this.solde=data
console.log(this.solde)
    })
    if (!formData.idConge) {
      delete formData.idConge;
    }

    this.congeService.addConge(formData).subscribe(
      (response: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Conge ajouté avec succès',
          showConfirmButton: false,
          timer: 3000
        });
        // Refresh the list
      this.getCongeByMat();
      this.modalService.dismissAll();
      },
      (error) => {
        console.error('Error adding conge:', error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de l\'ajout du congé.'
        });
      }
    );
   

  }
  confirm(id) {
    this.congeService.DeleteCng(id).subscribe((data)=>{
          
    })
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
    this.getCongeByMat()
  }
  deleteConge(id:any){
    console.log(id)
    this.congeService.DeleteCng(id).subscribe((data)=>{
      this.getCongeByMat()
      console.log("ok"+data)
      if(data==null){
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'Vous ne pouvez pas supprimer votre demande ',
          showConfirmButton: false,
          timer: 3000
        }); 
      }
      else{
        this.congeService.DeleteCng(id).subscribe((data)=>{
          
        })
      }
    })
  }
  // Add this method to your component class
calculateDuree() {
  const dateDebut = this.formConge.get('dateDebut').value;
  const dateFin = this.formConge.get('dateFin').value;

  if (dateDebut && dateFin) {
    const start = new Date(dateDebut);
    const end = new Date(dateFin);
    
    // Calculate difference in days (+1 to include both start and end dates)
    const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24)) + 1;
    
    // Update the 'duree' form control
    this.formConge.patchValue({ duree: diff.toString() });
    this.checkDuration();
  }
 
}
}
