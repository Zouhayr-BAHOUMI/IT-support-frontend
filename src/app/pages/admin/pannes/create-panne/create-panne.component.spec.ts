import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePanneComponent } from './create-panne.component';

describe('CreatePanneComponent', () => {
  let component: CreatePanneComponent;
  let fixture: ComponentFixture<CreatePanneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreatePanneComponent]
    });
    fixture = TestBed.createComponent(CreatePanneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
