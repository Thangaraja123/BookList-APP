import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { level } from './level.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  

   constructor (private http : HttpClient){
      
   }

   getvalue (){

      return this.http.get<any[]>('http://localhost:8080/value');
   }

  postvalue(fast : level){
          
        return this.http.post<level>("http://localhost:8080/Register",fast);
  }

   
}
