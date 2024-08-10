import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PannesService } from 'src/app/shared/services/pannes.service';

@Component({
  selector: 'app-create-panne',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-panne.component.html',
  styleUrls: ['./create-panne.component.scss']
})
export class CreatePanneComponent implements OnInit{

  createPanneForm: FormGroup;

  constructor(
    private panneService: PannesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createPanneForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.createPanneForm.valid) {
      const panneToAdd = this.createPanneForm.value;

      this.panneService.addPanne(panneToAdd).subscribe(
        response => {
          console.log('Panne created successfully', response);
          this.router.navigate(['/admin/admin-dashboard/pannes']);
        },
        error => {
          console.error('Error creating panne', error);
        }
      );
    }
  }

}
