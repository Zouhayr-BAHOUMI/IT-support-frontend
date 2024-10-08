import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTicketComponent } from './card-ticket.component';

describe('CardTicketComponent', () => {
  let component: CardTicketComponent;
  let fixture: ComponentFixture<CardTicketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardTicketComponent]
    });
    fixture = TestBed.createComponent(CardTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
