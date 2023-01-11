import { NgModule,isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { tests } from './booklist.directives';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServicesService } from './services.service';

import {HttpClientModule} from "@angular/common/http"
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserlistComponent } from './userlist/userlist.component';
import { LoginListComponent } from './login-list/login-list.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { SelectComponent } from './select/select.component';

import {StoreModule} from "@ngrx/store"
import {StoreDevtoolsModule} from "@ngrx/store-devtools"

import { addreduce } from './store/store.reducers';
import { AuthorComponent } from './author/author.component';
import { ImageComponent } from './image/image.component';
@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    tests,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    UserlistComponent,
    LoginListComponent,
    EditComponent,
    DeleteComponent,
    SelectComponent,
    AuthorComponent,
    ImageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

     StoreModule.forRoot({count : addreduce  }),
     StoreDevtoolsModule.instrument(),
     
    ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
