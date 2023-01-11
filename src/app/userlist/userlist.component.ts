import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { level } from '../level.model';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

list : any[];

  constructor(public vala : ServicesService,private router : Router){

  }

  ngOnInit(): void{

    this.vala.getvalue().subscribe((data) => {this.list = data;});
  } 
      
sel(){

  this.router.navigateByUrl("/edit")
}
 
}
