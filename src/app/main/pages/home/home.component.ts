import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { map } from 'rxjs';
import { Imagen } from 'src/app/shared/interfaces/imagen.interface';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public listadoImagenes: Imagen[] = [];
  public imagenesMostradas: Imagen[] = [];
  public pagina: number = 1;
  public filtrado: boolean = false;
  public errorBusqueda: string = '';
  public selectedOption: string = 'id';



  //paginator
  page_size = 10;
  page_number = 1;
  pageSizeOptions: number[] = [5, 10, 25, 50];

  miFormulario: FormGroup = this.fb.group({
    select: ['id', [Validators.required] ],
    busqueda: ['', [ Validators.required, Validators.minLength(1)] ],
  });

  constructor(private mainService: MainService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getImagenes();
  }

  getImagenes() {
    this.mainService.getImagenes()
      /*.pipe(
       map( imagenes => {
        imagenes.forEach( imagen => {imagen.text = `texto_${imagen.id}`} )
        return imagenes
      }) 
      )*/
      .subscribe((result) => {
        (this.listadoImagenes = result.sort(() => {
          return Math.random() - 0.5;
        })),
          (this.imagenesMostradas = this.listadoImagenes);
      });
  }

  handlePage(e: PageEvent) {
    this.page_size = e.pageSize;
    this.page_number = e.pageIndex + 1;
  }



  buscar(){

    if(this.miFormulario.controls['select'].value === 'id'){
      if(this.miFormulario.controls['busqueda'].value === ''){
        this.errorBusqueda = 'Introduce un ID'
      }else if( isNaN(this.miFormulario.controls['busqueda'].value  ) ){
        this.errorBusqueda = 'El ID debe de ser un número'
      }else if ( this.miFormulario.controls['busqueda'].value < 1 || this.miFormulario.controls['busqueda'].value > 4000){
        this.errorBusqueda = 'El ID debe de ser un número entre el 1 y el 4000'
      }else{
        this.errorBusqueda = '';
        this.buscarId()
      }
      
    }
    
    if( this.miFormulario.controls['select'].value === 'texto'   ){
      if(this.miFormulario.controls['busqueda'].value === ''){
        this.errorBusqueda = 'Introduce un texto'
      }else{
        this.errorBusqueda = '';
        this.buscarTexto()
      }
    }
  }


  buscarId() {
    console.log(this.miFormulario.value)
    this.listadoImagenes.find((imagen) => {
      if (imagen.id === Number(this.miFormulario.value.busqueda)) {
        this.imagenesMostradas = [imagen]
        this.filtrado = true;
      }
    });
  }


  
  buscarTexto(){
    const contienenText:Imagen[] = [];
    this.listadoImagenes.filter((imagen) => {
      if (imagen.text.includes(this.miFormulario.value.busqueda)) {
        contienenText.push(imagen)
      }
    });

    if(contienenText.length === 0){
      this.errorBusqueda = 'No se ha encontrado ninguna imagen con ese texto';
    }else{
      this.imagenesMostradas = contienenText;
      this.filtrado = true; 
    }
    
  }

  eliminarFiltro(){
    this.imagenesMostradas = this.listadoImagenes;
    this.miFormulario.reset({select:'id'});
    this.filtrado = false;
  }



}
