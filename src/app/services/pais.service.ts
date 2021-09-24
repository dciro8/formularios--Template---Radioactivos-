import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from '../pages/Post .model';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private http: HttpClient) { }


  getPaises() {

    return this.http.get('https://restcountries.eu/rest/v2/lang/es')
      
    .pipe(map((data: any) => data.map( (pais:any) => ({
      nombre: pais.name, codigo: pais.alpha3Code
    }))));
  }
}
