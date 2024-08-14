import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Ticket } from 'src/app/interfaces/ticket';
import { Technicien } from 'src/app/interfaces/technicien';
import { TicketsService } from 'src/app/shared/services/tickets.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { UserRole } from 'src/app/enums/user-role';
import { User } from 'src/app/interfaces/user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] = [];
  users: User[] = [];
  ticketToAssigne : Ticket | null = null;
  showAssignModal = false;

  constructor( 
    private ticketsService : TicketsService,
    private userService : UsersService
   ) {}


   ngOnInit() {
    this.getTickets();
    this.getUsersRole();
  }


   public getUsersRole() : void{
    this.userService.getUsersByRole(UserRole.TECHNICIEN).subscribe(
      (response : User[]) =>{
        console.log(response);
        this.users= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  public getTickets():void{
    this.ticketsService.getTickets().subscribe(
      (response : Ticket[]) =>{
        console.log(response);
        this.tickets= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  openAssignModal(ticket: Ticket) : void {
    this.ticketToAssigne = ticket;
    this.showAssignModal = true;
  }

  closeAssignModal() {
    this.showAssignModal = false;
    this.ticketToAssigne = null;
  }

}
