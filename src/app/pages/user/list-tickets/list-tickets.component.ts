import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/auth.service';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { CardTicketComponent } from "../card-ticket/card-ticket.component";
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketsService } from 'src/app/shared/services/tickets.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-tickets',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CardTicketComponent, RouterModule],
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent implements OnInit {

  tickets : Ticket[] = [];

  constructor(private ticketsService: TicketsService) { }

  ngOnInit(): void {
    this.getTickets();
  }
  public getTickets():void{
    this.ticketsService.getTicketsUtilisateur().subscribe(
      (response : Ticket[]) =>{
        console.log(response);
        this.tickets= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

  
}
