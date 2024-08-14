import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ticket } from 'src/app/interfaces/ticket';
import { TicketsService } from 'src/app/shared/services/tickets.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-card-ticket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-ticket.component.html',
  styleUrls: ['./card-ticket.component.scss']
})
export class CardTicketComponent{
  @Input() ticket: Ticket | undefined;
}
