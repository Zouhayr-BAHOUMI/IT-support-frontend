import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EquipementsService } from 'src/app/shared/services/equipements.service';
import { Equipement } from 'src/app/interfaces/equipement';
import { TypeEquipement } from 'src/app/enums/type-equipement';


@Component({
  selector: 'app-create-equipement',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-equipement.component.html',
  styleUrls: ['./create-equipement.component.scss']
})
export class CreateEquipementComponent implements OnInit {

  createEquipementForm: FormGroup;
  selecteFile: File | null = null;

  types = Object.values(TypeEquipement);

  constructor(
    private equipementsService: EquipementsService,
    private formbuilder : FormBuilder,
    private router : Router
  ){
    this.createEquipementForm = this.formbuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      dateAchetee: ['', Validators.required],
      imageUrl: ['', Validators.required] 
    });
  }

  ngOnInit(): void {}

  onSelectFile(e: Event): void {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selecteFile = file;
      this.createEquipementForm.patchValue({ imageUrl: file.name });
    }
  }


  onSubmit(): void {
    if (this.createEquipementForm.valid) {
      const equipementToAdd: Partial<Equipement> = {
        imageUrl: this.createEquipementForm.value.imageUrl,
        nom: this.createEquipementForm.value.nom,
        type: this.createEquipementForm.value.type,
        dateAchetee: this.createEquipementForm.value.dateAchetee,
      };

      
      

      if (this.selecteFile) {
        equipementToAdd.imageUrl = this.selecteFile.name;
      }

      this.equipementsService.addEquipement(equipementToAdd as Equipement).subscribe(
        response => {
          console.log('equipement created successfully', response);
          this.router.navigate(['/dashboard/events']);
        },
        error => {
          console.error('Error creating event', error);
        }
      );
    }
  }

}
