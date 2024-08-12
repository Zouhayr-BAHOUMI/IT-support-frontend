import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Equipement } from 'src/app/interfaces/equipement';
import { Panne } from 'src/app/interfaces/panne';
import { TicketsService } from 'src/app/shared/services/tickets.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Ticket } from 'src/app/interfaces/ticket';

@Component({
  selector: 'app-create-ticket',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.scss']
})
export class CreateTicketComponent  implements OnInit{


  createTicketForm: FormGroup;
  equipements : Equipement [] = [];
  pannes : Panne[] = [];

  constructor(
    private ticketsService : TicketsService,
    private formbuilder : FormBuilder,
    private router : Router
  ){
    this.createTicketForm = this.formbuilder.group({
      description: ['', Validators.required],
      equipement: ['', Validators.required],
      panne: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getEquipements();
    this.getPannes();
  }

  public getEquipements():void{
    this.ticketsService.getEquipementUtilisateur().subscribe(
      (response : Equipement[]) =>{
        console.log(response);
        this.equipements= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  public getPannes():void{
    this.ticketsService.getPannes().subscribe(
      (response : Panne[]) =>{
        console.log(response);
        this.pannes= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  onSubmit() {
    if (this.createTicketForm.valid) {
      
      const ticket: Ticket = {
        ...this.createTicketForm.value,
        equipement: { id: this.createTicketForm.value.equipement },
        panne: { idPanne: this.createTicketForm.value.panne }
      };

      this.ticketsService.createTicket(ticket).subscribe(
        response => {
          console.log('equipement created successfully', response);
          this.router.navigate(['/user/user-home']);
        },
        error => {
          console.error('Error creating event', error);
        }
      );
    }
  }
  

}
