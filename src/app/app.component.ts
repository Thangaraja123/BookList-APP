import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'book-shop';

 
res(){

  localStorage.clear();
  alert("Account Successfully Logout")
}
}
