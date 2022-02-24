import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaginatePipe } from '../../pipes/paginate.pipe';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent, PaginatePipe ],
      imports:[
        HttpClientModule,
      ],
      providers: [
        FormBuilder,
      ]
    })
    .compileComponents();
  });
 
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
   it('Creación componente Home', () => {
    expect(component).toBeTruthy();
  });  


  /* it('Devuelve formulario válido', () =>{
    const fixture = TestBed.createComponent(HomeComponent);
    const home = fixture.componentInstance;
    fixture.detectChanges()

    const busqueda = home.miFormulario.controls['busqueda']
    busqueda.setValue('7S4')
    expect(home.miFormulario.valid).toBeTrue();

  });
 */

 

  

});
