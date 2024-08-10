import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/shared/services/users.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  public users: User[] = [];

  constructor(private userService : UsersService){}

  ngOnInit() {
    this.getUsers();
  }

  public getUsers():void{
    this.userService.getUsers().subscribe(
      (response : User[]) =>{
        console.log(response);
        this.users= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }



}
