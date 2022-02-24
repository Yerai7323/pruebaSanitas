import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagen } from 'src/app/shared/interfaces/imagen.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class MainService {

  public baseUrl = environment.base_url;

  constructor(private http: HttpClient) {}

  getImagenes(): Observable<Imagen[]> {
    return this.http.get<Imagen[]>(`${this.baseUrl}`);
  }
}
