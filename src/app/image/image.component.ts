import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { detail } from '../store/detail.model';
import { Store } from '@ngrx/store';
import { getselect } from '../store/store.selectors';
import { select } from '@ngrx/store';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {

  books$: Observable<detail[]>

 constructor(private store : Store<{count : detail}>){


 }

ngOnInit() : void {

  
  this.books$ = this.store.pipe(select(getselect))
}

}