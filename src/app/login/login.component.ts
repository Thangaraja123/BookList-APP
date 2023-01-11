import { Component,Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, sequenceEqual } from 'rxjs';
import { level } from '../level.model';
import { log } from '../log.model';
import { ServicesService } from '../services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  list : level[] = [];

  
  vid : log = new log();
  
   texts : boolean = false;
   texts1 : boolean = false

  constructor(private router : Router,private ser : ServicesService,private store : Store){

  }

  foc(){

    let data = this.list.map(data =>{
      return data.email

   })

   let data1 = this.list.map(data =>{
    return data.conform

 })
   
 for (let a of data){

  
  if (this.vid.email === a ){

    console.log("Email is Correct")
    
 }

 else{

   this.texts = true
 }

 for (let a1 of data1){

  
  if (this.vid.confrom === a1 ){

    this.router.navigateByUrl("login-list")
    
 }

 else{

   this.texts1 = true
 }

}
 }

localStorage.setItem("Tasks1",this.vid.email);
localStorage.setItem("Tasks2",this.vid.confrom);
     
  } 

  ngOnInit() : void{

    this.ser.getvalue().subscribe((data) => {this.list = data;})
   
    
  }
}
