import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
import Swal from 'sweetalert2';
import { RhService } from '../rh.service';

@Component({
  selector: 'app-gestion-type-conge',
  templateUrl: './gestion-type-conge.component.html',
  styleUrls: ['./gestion-type-conge.component.scss']
})
export class GestionTypeCongeComponent implements OnInit {

 // bread crumb items
 breadCrumbItems: Array<{}>;
 typeCng:any
 Cng:any
 solde:any
 dateCng=new Date()
 formType:FormGroup
 loading = false;
 errorMsg = '';
 
   constructor(
     private modalService: NgbModal,
     private formBuilder : FormBuilder,
     private congeService:RhService,
     private token:TokenStorage,
     public router: Router
   ) { }
 
 
    ngOnInit(): void {
      this.breadCrumbItems = [{ label: 'Congé' }, { label: 'Gestion des congés', active: true }];
      
      // Vérifier l'authentification avant de charger les données
      const token = this.token.getToken();
      if (!token) {
        this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
        setTimeout(() => {
          this.router.navigate(['/account/login']);
        }, 2000);
        return;
      }
      
      this.getService();
      this.formType = this.formBuilder.group({
 
        idType:[''],
        nomTypeconge:['',Validators.required],
        maxAllowedDays: ['', [Validators.required, Validators.min(1)]],
       });
 
     }
     openModalAjout(content: any) {
       this.modalService.open(content, { size: 'lg', centered: true });
       this.formType.reset()

     }
     
   
   openModalUpdate(content: any,conge:any) {
     this.modalService.open(content, { size: 'lg', centered: true });
 
     this.formType.patchValue({
      idType: conge.idType,
      nomTypeconge:conge.nomTypeconge,
       maxAllowedDays: conge.maxAllowedDays ,
   
     });
     console.log(this.formType.value)

   }
 
 
  getService() {
    this.loading = true;
    this.errorMsg = '';
    
    this.congeService.getTypeConge().subscribe({
      next: (data: any) => {
        this.typeCng = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des types de congés:', error);
        this.loading = false;
        
        if (error.status === 401) {
          this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
          setTimeout(() => {
            this.router.navigate(['/account/login']);
          }, 2000);
        } else {
          this.errorMsg = 'Erreur lors du chargement des types de congés. Veuillez réessayer.';
        }
      }
    });
  }
 

 
   ajoutservice(){

 console.log(this.formType.value)
 
     this.congeService.addTypeConge(this.formType.value).subscribe((data:any)=>{
 if (data){
 
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Conge ajouté avec succés ',
    showConfirmButton: false,
    timer: 3000
  });
  this.modalService.dismissAll()
  this.formType.reset()
  this.getService()
 }
 else{
  

 }
     })
 
   }
   confirm(id) {
    
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
        this.congeService.DeleteType(id).subscribe((data)=>{
          this.getService()
        
         })
         Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
       }
     });
     this.getService()
   }
   deleteConge(id:any){
     console.log(id)
     this.congeService.DeleteType(id).subscribe((data)=>{
       this.getService()
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
        
       }
     })
   }
 }
 