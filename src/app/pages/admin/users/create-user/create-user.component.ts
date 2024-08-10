import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  createUserForm : FormGroup;

  constructor(
    private userService : UsersService ,
    private formbuilder : FormBuilder,
    private router : Router
  ){
    this.createUserForm = this.formbuilder.group({
      role: ['USER', Validators.required],
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password : ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.createUserForm.valid) {
      console.log(this.createUserForm.value)
      // const { role, ...userToAdd } = this.createUserForm.value;
      const userToAdd  = this.createUserForm.value;

      
      
      if (userToAdd.role === 'TECHNICIEN'){
        this.userService.registerTechnician(userToAdd).subscribe(
          response => {
            console.log('technicien created successfully', response);
            this.router.navigate(['/admin/admin-dashboard/users']);
          },
          error => {
            console.error('Error creating technicien', error);
          }
        );
      }else if(userToAdd.role === 'USER'){
        this.userService.registerUser(userToAdd).subscribe(
          response => {
            console.log('utilisateur created successfully', response);
            this.router.navigate(['/admin/admin-dashboard/users']);
          },
          error => {
            console.error('Error creating technicien', error);
          }
        );
      }
    }
  }



}
