import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CardComponent } from './card.component';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const mockImagen = {
    "id": 2,
    "photo": "https://i.picsum.photos/id/1067/200/200.jpg?hmac=ngB6HBZNUvsDrt27Y2-MuiSoudFqdwH6bSd8CP8zsy8",
    "text": "ngB6HBZNUvsDrt27Y2-MuiSoudFqdwH6bSd8CP8zsy8"
  };
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.imagen = mockImagen;
    fixture.detectChanges();
  }); 


  it('Creación componente Card', () => {
    expect(component).toBeTruthy();
  }); 


});
