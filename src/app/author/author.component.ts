import { Component } from '@angular/core';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { detail } from '../store/detail.model';
import { getselect } from '../store/store.selectors';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

books$ : Observable<detail[]>;

  constructor(private store : Store<{count : detail}>){

     
  }

  ngOnInit (): void {

    this.books$ = this.store.pipe(select(getselect))
    
  }
}
