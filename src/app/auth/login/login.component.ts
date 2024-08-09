import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/core/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email : string | undefined;
  password : string | undefined;
  loginForm! : FormGroup;

  constructor(
    private authService : AuthService, 
    private router : Router,
    private formbuilder : FormBuilder,
    
  ){}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email  : ['',[Validators.required, Validators.email]],
      password  : ['',[Validators.required]]
    })
  }

  sendForm(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){

      this.authService.login(this.loginForm.value).subscribe(
        response =>{
          const role = this.authService.getCurrentUserRole();
          if(role){

          }
          this.loginForm.reset();
          this.router.navigate(['/dashbord'])
        },
        error =>{
          console.log("Failed to log in", JSON.stringify(error));
        }
      );

    }else{
      console.error('Form is invalid');
    }
  }

  public redirectUsers(role : string) : void {
      switch(role){
        case 'ADMIN' : 
          this.router.navigate(['/admin/admin-dashboard']);
          break;

        case 'TECHNICIEN' :
          this.router.navigate(['/technicien/technicien-dashboard']);
          break;

        case 'USER' :
          this.router.navigate(['/user/user-home']);
          break;

        default : this.router.navigate(['/login']);

        
      }
  }


}
