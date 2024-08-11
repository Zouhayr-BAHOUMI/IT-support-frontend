import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Equipement } from 'src/app/interfaces/equipement';
import { EquipementsService } from 'src/app/shared/services/equipements.service';
import { StatusEquipement } from 'src/app/enums/status-equipement';
import { TypeEquipement } from 'src/app/enums/type-equipement';

@Component({
  selector: 'app-edit-equipement',
  standalone: true,
  imports: [CommonModule, RouterModule,ReactiveFormsModule],
  templateUrl: './edit-equipement.component.html',
  styleUrls: ['./edit-equipement.component.scss']
})
export class EditEquipementComponent implements OnInit{

  editEquipementForm: FormGroup;
  idEquipement!: number;
  equipement: Equipement = {} as Equipement;
  selecteFile: File | null = null;
  statuses = Object.values(StatusEquipement);
  types = Object.values(TypeEquipement);

  constructor(
    private equipementsService: EquipementsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editEquipementForm = this.formBuilder.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      status: ['', Validators.required],
      dateAchetee: ['', [Validators.required]], 
      imageUrl: [''] 
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idEquipement = +params['idEquipement'];
      this.equipementsService.getEquipementById(this.idEquipement).subscribe(
        response => {
          this.equipement = response;
          this.editEquipementForm.patchValue({
            nom: response.nom,
            type: response.type,
            status: response.status,
            dateAchetee: response.dateAchetee,
            imageUrl: response.imageUrl
          });
        },
        error => console.log(error)
      );
    });
  }

  onSelectFile(e: Event): void {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file) {
      this.selecteFile = file;
      this.editEquipementForm.patchValue({ imageUrl: file.name });
    }
  }

  onSubmit() {
    if (this.editEquipementForm.valid) {

    
      const equipementToUpdate : Equipement = {
        ...this.editEquipementForm.value,
        imageUrl: this.selecteFile ? this.selecteFile.name : this.editEquipementForm.value.imageUrl
      }
      this.equipementsService.updateEquipement(this.idEquipement, equipementToUpdate).subscribe(
        response => {
          console.log('Equipement updated successfully', response);
          this.router.navigate(['/admin/admin-dashboard/equipements']);
        },
        error => console.log(error)
      );
    }
  }

}
