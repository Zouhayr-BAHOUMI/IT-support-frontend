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

}
