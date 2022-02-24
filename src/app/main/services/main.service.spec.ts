import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Imagen } from 'src/app/shared/interfaces/imagen.interface';


import { MainService } from './main.service';

describe('Pruebas MainService', () => {
  let service: MainService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(MainService);
  });

   it('Creación servicio Main', () => {
    expect(service).toBeTruthy();
  });  

  it('Comprobar BaseURL', ()=>{
    const url = service.baseUrl;
    expect(url).toEqual("http://localhost:3000/imagenes");
  });

   it('Revisar petición de imagenes', () => {
    let imagenesArray: Imagen[] = [];
    let devuelveDatos;
    service.getImagenes().subscribe(imagenes => {
      imagenesArray = imagenes,
      devuelveDatos = imagenesArray.length>0 ? true: false;
      expect(devuelveDatos).toBeTrue();
    })


    //expect------


  }); 

});
