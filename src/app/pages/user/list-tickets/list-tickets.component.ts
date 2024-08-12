import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { CardTicketComponent } from "../card-ticket/card-ticket.component";

@Component({
  selector: 'app-list-tickets',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CardTicketComponent],
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent {
  
}
