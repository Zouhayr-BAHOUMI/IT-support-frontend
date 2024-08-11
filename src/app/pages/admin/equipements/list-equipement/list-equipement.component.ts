import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Equipement } from 'src/app/interfaces/equipement';
import { EquipementsService } from 'src/app/shared/services/equipements.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-list-equipement',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-equipement.component.html',
  styleUrls: ['./list-equipement.component.scss']
})
export class ListEquipementComponent {


  equipements: Equipement[] = [];

  equipementToDelete : Equipement | null = null;
  showModal = false;

  constructor(private equipementService: EquipementsService) { }

  
  ngOnInit() {
    this.getEquipements();
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

}
