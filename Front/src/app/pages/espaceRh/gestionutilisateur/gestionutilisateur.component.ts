import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RhService } from '../rh.service';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CongeService } from '../../tables/conge.service';



interface RoleFormData {
  user_id: number;
  role_id: number;
  niveau?: number | null;
}

@Component({
  selector: 'app-gestionutilisateur',
  templateUrl: './gestionutilisateur.component.html',
  styleUrls: ['./gestionutilisateur.component.scss']

})



export class GestionutilisateurComponent implements OnInit {
serv:any[]
  list:any[]
  chefsInService: any[] = [];
  roleForm:FormGroup
  userForm: FormGroup;
  lib:any
  p:any
  term:string
  modifForm:FormGroup

  
    constructor(private adminServ:RhService,private formBuilder:FormBuilder,private modalService: NgbModal) { }
  
    ngOnInit(): void {
      this.userForm = this.formBuilder.group({
        idEmploye:[''],
        // roles: this.formBuilder.array([
           
        // ]),
        password: [''],
        departement : [''],
        email : [''],
        matriculeP : [''],
        nom : [''],
        numTel : [''],
        poste : [''],
        prenom : [''],
        responsable: this.formBuilder.group({
          matriculeP: ['']
        }),
        
        serv : this.formBuilder.group({
          idService:['']
        }),
    roles :this.formBuilder.array([
      this.formBuilder.group({
        id: ['']
      })
])

      });
      this.modifForm=this.formBuilder.group({

        departement : [''],
        email : [''],
        idEmploye : [''],
        matriculeP : [''],
        nom : [''],
        numTel : [''],
        password : [''],
        poste : [''],
        prenom : [''],
        responsable: this.formBuilder.group({
          matriculeP: ['']
        }),
        serv : this.formBuilder.group({
          idService:['']
        })

        

      })
      this.roleForm=this.formBuilder.group({
        user_id: [''],
        role_id : [],
        niveau: [null]
       

      })
      this. getUtilisateur()
      this.getService()
    }
    updateDemande(){
  console.log(this.userForm.value)
      this.adminServ.UpdateRole(this.userForm.value)
  
       .subscribe({
         next:(res)=>{
           if (res) {
             if (res) {
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'La demande est mise à jour avec succès !',
                showConfirmButton: false,
                timer: 2000
              });
              // this.toastr.success(' agence updated!', 'update effectuée avec succés.');
           //  this.userForm.reset();
           this.getUtilisateur()
             this.modalService.dismissAll();
             } else {
              // this.toastr.error('Echec update', 'Problème de suppression.');
             }
  
                   }
  
         },
  
  
  
       })
  
   }
  
   updatePass(){
  
    this.adminServ.UpdatePss(this.userForm.value)
  
     .subscribe({
       next:(res)=>{
         if (res) {
           if (res) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Mot de passe mis à jour avec succès !',
              showConfirmButton: false,
              timer: 2000
            });
            // this.toastr.success(' agence updated!', 'update effectuée avec succés.');
         //  this.userForm.reset();
         this.getUtilisateur()
           this.modalService.dismissAll();
           } else {
            // this.toastr.error('Echec update', 'Problème de suppression.');
           }
  
                 }
  
       },
  
  
  
     })
  
  }

    
  updatRole() {
    if (this.roleForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Veuillez remplir tous les champs obligatoires'
      });
      return;
    }
  
    const formData = this.roleForm.value;
  
    // If not CHEF, set niveau to null
    if (formData.role_id !== "1") {
      formData.niveau = null;
    }
  
    // Debugging: Log request data
    console.log("Données envoyées au backend:", formData);
  
    this.adminServ.UpdateRole(formData).subscribe({
      next: (res) => {
        console.log("Réponse du backend:", res);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Rôle mis à jour avec succès!',
          showConfirmButton: false,
          timer: 2000
        });
        this.getUtilisateur();
        this.modalService.dismissAll();
      },
      error: (err) => {
        console.error("Erreur de mise à jour du rôle:", err);
      }
    });
  }
  
    openModal(targetModal, user) {
      this.modalService.open(targetModal, {
       centered: true,
       backdrop: 'static'
      });
  
      this.userForm.patchValue({
        idEmploye: user.idEmploye,
  
        roles: user.roles.id,
  
  
      });
      this.lib=this.userForm.get('idEmploye').value
      console.log(this.lib)
  
  
  
     }
     openModalRole(targetModal, user) {
      this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static'
      });
    
      // Initialize niveau if user is CHEF
      const isChef = user.roles.some(r => r.id === 1);
      const roleId = isChef ? '1' : String(user.roles[0]?.id); 
    
      this.roleForm.patchValue({
        user_id: user.idEmploye,
        role_id: roleId, // Use the string value
        niveau: isChef ? user.niveau : null
      });
    }
     openModalupdatePass(targetModal, user) {
      this.modalService.open(targetModal, {
       centered: true,
       backdrop: 'static'
      });
  
      this.userForm.patchValue({
        idEmploye: user.idEmploye,
  
        password: user.password,
  
  
      });
      this.lib=this.userForm.get('idEmploye').value
      console.log(this.lib)
  
  
  
     }
     get roles() {
      return this.userForm.get('roles') as FormArray;
    }
     openModalModif(targetModal, user) {
      
      this.modalService.open(targetModal, {
       centered: true,
       backdrop: 'static'
      });
      const role = this.roles.at(0).get('id');
      role.patchValue(user.roles[0].id);

      this.userForm.patchValue({
        departement : user.departement,
        email : user.email,
        idEmploye : user.idEmploye,
        matriculeP : user.matriculeP,
        nom :user.nom,
        numTel :user.numTel,
        password : user.password,
        poste : user.poste,
        responsable: {
          matriculeP: user.responsable?.matriculeP // Patch nested field
        },
        prenom : user.prenom,
        serv:{
          idService:user.serv.idService
        },
  
      });
      if (user.serv?.idService) {
        this.onServiceChange(user.serv.idService);
      }
      this.lib=this.userForm.get('matriculeP').value

      console.log(this.lib)
      console.log(this.userForm.value)
    }
    getUtilisateur() {
      this.adminServ.GetUser().subscribe(
        (data: any[]) => {
          this.list = data;
          console.log("********************",this.list);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    getService() {
      
      this.adminServ.getService().subscribe(
        (data: any[]) => {
          this.serv = data;
  
          console.log("********************",this.serv);
        },
        (error) => {
          console.log(error);
        }
      );
    }
    updateUser(){
      const formData = { ...this.userForm.value };
     
      
      console.log("Data sent:", this.userForm.value);
      this.adminServ.Updatepers(this.userForm.value).subscribe(data =>{
        if (data) {
          if (data) {
           Swal.fire({
             position: 'top-end',
             icon: 'success',
             title: 'Utilisateur est modifier avec succées !',
             showConfirmButton: false,
             timer: 2000
           });
           // this.toastr.success(' agence updated!', 'update effectuée avec succés.');
        //  this.userForm.reset();
        this.getUtilisateur()
          this.modalService.dismissAll();
          } else {
           // this.toastr.error('Echec update', 'Problème de suppression.');
          }

                }

      })}


      // In gestionutilisateur.component.ts
      onServiceChange(serviceId: number) {
        if (serviceId) {
          this.adminServ.getChefsByService(serviceId).subscribe(
            (chefs: any[]) => {
              this.chefsInService = chefs;
              // Auto-select if only one chef exists
              if (chefs.length === 1) {
                this.userForm.patchValue({
                  nomResponsable: `${chefs[0].prenom} ${chefs[0].nom}`
                });
              }
            },
            (error) => console.error('Error fetching chefs:', error)
          );
        } else {
          this.chefsInService = [];
        }
      }
    
  }