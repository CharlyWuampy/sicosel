import { Injectable } from '@angular/core';
import { Generales } from '../../modelos/generales/generales.interfaces';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class GeneralesService {
  private urlApi = "http://localhost:8080/sentenced";
  constructor(private http:HttpClient) {
  }
  
  addNewSentenciado(sentenciado: Generales): Observable<Generales> {
    return this.http.post<Generales>(this.urlApi, sentenciado);
  }
}
