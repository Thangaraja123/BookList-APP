import { HttpHeaders } from '@angular/common/http';
import { Expression } from '@angular/compiler';
import { Component } from '@angular/core';
import { level } from '../level.model';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  levels : any[];

  
  
vic : level = new level();

  constructor (public tests : ServicesService){

  }

  
  welcome()  {
    

    this.tests.postvalue(this.vic).subscribe();
    
    this.vic.email = " ";
    this.vic.conform = "";
    this.vic.password = "";

}
 
}

