import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PannesService } from 'src/app/shared/services/pannes.service';
import { Panne } from 'src/app/interfaces/panne';

@Component({
  selector: 'app-edit-panne',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './edit-panne.component.html',
  styleUrls: ['./edit-panne.component.scss']
})
export class EditPanneComponent implements OnInit{

  editPanneForm: FormGroup;
  idPanne!: number;
  panne: Panne = {} as Panne;


  constructor(
    private panneService: PannesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editPanneForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idPanne = +params['idPanne'];
      this.panneService.getPanneById(this.idPanne).subscribe(
        Response => {
        console.log(this.panne = Response);
        this.editPanneForm.patchValue({
          nom: Response.nom,
          description: Response.description
        });
      }, 
      error => console.log(error));

    });

  }

  onSubmit() {
    if (this.editPanneForm.valid) {
      
      this.panneService.updatePanne(this.idPanne, this.panne).subscribe(
        Response => {
          console.log('Panne updated successfully',Response);
          this.router.navigate(['/admin/admin-dashboard/pannes']);
        },
        error => console.log(error)
      );
    }
  }



}
