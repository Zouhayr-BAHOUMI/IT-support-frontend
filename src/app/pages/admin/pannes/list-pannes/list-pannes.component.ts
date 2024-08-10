import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Panne } from 'src/app/interfaces/panne';
import { UsersService } from 'src/app/shared/services/users.service';
import { PannesService } from 'src/app/shared/services/pannes.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-pannes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-pannes.component.html',
  styleUrls: ['./list-pannes.component.scss']
})
export class ListPannesComponent implements OnInit{

  public pannes: Panne[] = [];

  constructor(private pannesService : PannesService){}

  ngOnInit() {
    this.getPannes();
  }
  public getPannes():void{
    this.pannesService.getPannes().subscribe(
      (response : Panne[]) =>{
        console.log(response);
        this.pannes= response;
      },
      (error : HttpErrorResponse) =>{
        console.log(error.message);
      }
    );
  }

}
