import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPannesComponent } from './list-pannes.component';

describe('ListPannesComponent', () => {
  let component: ListPannesComponent;
  let fixture: ComponentFixture<ListPannesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListPannesComponent]
    });
    fixture = TestBed.createComponent(ListPannesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
