import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { RhService } from '../rh.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenStorage } from 'src/app/core/services/tokenservice.service';
@Component({
  selector: 'app-gestion-service',
  templateUrl: './gestion-service.component.html',
  styleUrls: ['./gestion-service.component.scss']
})
export class GestionServiceComponent implements OnInit {

 // bread crumb items
 breadCrumbItems: Array<{}>;
 typeCng:any
 Cng:any
 solde:any
 dateCng=new Date()
 formService:FormGroup
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
      this.formService = this.formBuilder.group({
       idService:[''],
       cod_serv:['',Validators.required],
       lib_serv:['',Validators.required],
       matriculeChef:['',Validators.required],
      });
    }
     openModalAjout(content: any) {
       this.modalService.open(content, { size: 'lg', centered: true });
       this.formService.reset()

     }
     
   
   openModalUpdate(content: any,conge:any) {
     this.modalService.open(content, { size: 'lg', centered: true });
 
     this.formService.patchValue({
      idService: conge.idService,
      cod_serv:conge.cod_serv,
      lib_serv: conge.lib_serv,
      matriculeChef: conge.matriculeChef,
       
     });
     console.log(this.formService.value)

   }
 
 
  getService() {
    this.loading = true;
    this.errorMsg = '';
    
    console.log(this.token.getUser().matriculeP)
    this.congeService.getService().subscribe({
      next: (data: any) => {
        this.typeCng = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des services:', error);
        this.loading = false;
        
        if (error.status === 401) {
          this.errorMsg = 'Session expirée. Redirection vers la page de connexion...';
          setTimeout(() => {
            this.router.navigate(['/account/login']);
          }, 2000);
        } else {
          this.errorMsg = 'Erreur lors du chargement des services. Veuillez réessayer.';
        }
      }
    });
  }
 

 
  // In gestion-service.component.ts - Update the ajoutservice() method
ajoutservice() {
  console.log(this.formService.value);
  
  this.congeService.addService(this.formService.value).subscribe(
    (data: any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Service ajouté avec succès',
        showConfirmButton: false,
        timer: 3000
      });
      this.modalService.dismissAll();
      this.formService.reset();
      this.getService();
    },
    (error) => {
      // Handle validation errors from backend
      const errorMessage = error.error?.message || 'Erreur inconnue';
      
      Swal.fire({
        icon: 'error',
        title: 'Erreur de validation',
        text: errorMessage,
        confirmButtonColor: '#34c38f'
      });
    }
  );
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
        this.congeService.DeleteService(id).subscribe((data)=>{
          this.getService()
        
         })
         Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
       }
     });
     this.getService()
   }
   deleteConge(id:any){
     console.log(id)
     this.congeService.DeleteService(id).subscribe((data)=>{
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
         this.congeService.DeleteService(id).subscribe((data)=>{
          this.getService()

         })
       }
     })
   }

   
 }
 