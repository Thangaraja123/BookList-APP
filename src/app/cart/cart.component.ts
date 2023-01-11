import { Component,EventEmitter,Input, OnInit} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { detail } from '../store/detail.model';
import { getselect } from '../store/store.selectors';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{



val3 : any[] = [];

books$: Observable<detail[]>

 constructor(private route : ActivatedRoute, private store : Store<{count : detail}>)
{

 

}


 ngOnInit() : void {

  
this.books$ = this.store.pipe(select(getselect))



   let val2 = localStorage.getItem("Tasks")  // Get the data from local storage

   if (val2 === null){

    console.log("")
   
  }

   else {

    let val4 = JSON.parse(val2)
         
    this.val3 = val4;
  
   }
  
           
   }
  
    
}
