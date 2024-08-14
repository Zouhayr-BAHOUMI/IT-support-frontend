import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Equipement } from 'src/app/interfaces/equipement';
import { EquipementsService } from 'src/app/shared/services/equipements.service';
import { HttpErrorResponse } from '@angular/common/http';
import { UsersService } from 'src/app/shared/services/users.service';
import { User } from 'src/app/interfaces/user';
import { UserRole } from 'src/app/enums/user-role';
import { Utilisateur } from 'src/app/interfaces/utilisateur';


@Component({
  selector: 'app-list-equipement',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-equipement.component.html',
  styleUrls: ['./list-equipement.component.scss']
})
export class ListEquipementComponent {


  equipements: Equipement[] = [];
  users: User[] = [];

  equipementToDelete : Equipement | null = null;
  equipementToAssigne : Equipement | null = null;
  showModal = false;
  showAssignModal = false;

  constructor(
    private equipementService: EquipementsService,
    private usersService : UsersService
  ) { }

  
  ngOnInit() {
    this.getEquipements();
    this.getUsersRole();
  }

  public getEquipements():void{
    this.equipementService.getEquipements().subscribe(
      (response : Equipement[]) =>{
        console.log(response);
        this.equipements= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  public getUsersRole() : void{
    this.usersService.getUsersByRole(UserRole.USER).subscribe(
      (response : User[]) =>{
        console.log(response);
        this.users= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  getUtilisateurName(utilisateur: Utilisateur | number): string {
    if (typeof utilisateur === 'object' && utilisateur.fullname) {
        return utilisateur.fullname;
    } else if (typeof utilisateur === 'number') {
        const user = this.users.find(u => u.id === utilisateur);
        return user ? user.fullname : 'ghayrha';
    }
    return 'ghayrha';
}

  openDeleteModal(equipement : Equipement) : void{
    this.equipementToDelete = equipement;
    this.showModal = true;
  }

  confirmDelete(): void {
    if (this.equipementToDelete) {
      this.deleteEquipement(this.equipementToDelete.id);
    }
  }

  cancelDelete() {
    this.showModal = false;
    this.equipementToDelete = null;
  }

  deleteEquipement(id: number): void {
    this.equipementService.deleteEquipement(id).subscribe(() => {
      this.getEquipements();
      this.cancelDelete();
    });
  }

  openAssignModal(equipment: Equipement) : void {
    this.equipementToAssigne = equipment;
    this.showAssignModal = true;
  }

  closeAssignModal() {
    this.showAssignModal = false;
    this.equipementToAssigne = null;
  }

  assignEquipment(idUserSelect: string) {

    const idUser = parseInt(idUserSelect,10)
    if (this.equipementToAssigne) {
      this.equipementService.assignEquipmentToUser(this.equipementToAssigne.id, idUser).subscribe(
        response => {
          this.getEquipements();
          this.closeAssignModal();
        },
        error => console.error('Error assigning equipment:', error)
      );
    }
  }

}
