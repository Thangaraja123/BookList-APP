import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router} from '@angular/router';
import { Store } from '@ngrx/store';


import { level } from '../level.model';
import { detail } from '../store/detail.model';
import { addbook } from '../store/store.actions';
import { getselect } from '../store/store.selectors';





import { test } from './test.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']

})
export class BookListComponent {

 

  Booklist : test[] = [

      new test("clean code","robert c martin","https://m.media-amazon.com/images/I/51b7XbfMIIL._AC_UY218_.jpg","800"),
      new test ("pragmatic programmer","David","https://m.media-amazon.com/images/I/4163oCmhq+L._AC_UY218_.jpg","900"),
      new test ("core java","r. nageswara rao","https://m.media-amazon.com/images/I/51z+MsmqesL._AC_UY218_.jpg","1800"),
      new test ("computer networking","kurose","https://m.media-amazon.com/images/I/51vT3X2tdtL._AC_UY218_.jpg","1350"),
      new test ("Python", "Martin C","https://m.media-amazon.com/images/I/51H2jKwV7yL._AC_UY218_.jpg","1000"),
      new test ("HTML 5 Black Book","DT Editorial","https://m.media-amazon.com/images/I/514faGhNXxL._AC_UY218_.jpg","1300"),
      

  ]

buttons : string = "Show Books"

  select : boolean = true;

  sets : level[];

  books : detail;

  val : string[] = [];
  constructor(private router : Router, private store : Store<{count : detail[]}>){

  }

  lists(){

    this.select = !this.select

  }
  
  vic : boolean = false;
  
  
    addcart(book : test){

      
      this.vic = true


     this.store.dispatch(addbook({values : book}));

    
      
 
    
}


}

