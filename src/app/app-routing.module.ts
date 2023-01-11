import { RouterModule, Routes } from "@angular/router";
import {NgModule} from "@angular/core"
import { BookListComponent } from "./book-list/book-list.component";
import { CartComponent } from "./cart/cart.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { UserlistComponent } from "./userlist/userlist.component";
import { LoginListComponent } from "./login-list/login-list.component";
import { AuthGuard } from "./auth.guard";
import { EditComponent } from "./edit/edit.component";
import { DeleteComponent } from "./delete/delete.component";
import { SelectComponent } from "./select/select.component";
import { ImageComponent } from "./image/image.component";
import { AuthorComponent } from "./author/author.component";


const rout : Routes = [
    {path : "",component : BookListComponent},
    {path : 'BookNames', component : CartComponent,canActivate : [AuthGuard]},
    {path : 'AuthorNames', component : AuthorComponent,canActivate : [AuthGuard]},
    {path : 'Images', component : ImageComponent,canActivate : [AuthGuard]},
    {path : 'book-list',component : BookListComponent},
    {path : "login",component : LoginComponent},
    {path : "register",component: RegisterComponent},
    {path : "userlist",component: UserlistComponent,canActivate : [AuthGuard]},

    {path : "",  children : [
        {path : "userlist/edit",component : EditComponent},
        {path : "userlist/Delete",component : DeleteComponent},
        {path : "userlist/Delete/select",component :SelectComponent}
     ]},
    
    {path : "login-list",component:LoginListComponent},
    {path : '**', redirectTo: 'book-list'},
    {path : "logout",component:LoginListComponent},
    
    
];

@NgModule({

imports : [RouterModule.forRoot(rout)],
exports : [RouterModule],

})

export class AppRoutingModule{

}

