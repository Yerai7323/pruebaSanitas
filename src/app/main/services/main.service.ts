import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imagen } from '../interfaces/imagen.interface';

@Injectable({
  providedIn: 'root',
})
export class MainService {


  public baseUrl = environment.base_url;

  constructor(private http: HttpClient) {}

  getImagenes(page: number): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(`${this.baseUrl}`);
  }
}
