import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/main/interfaces/imagen.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() imagen!: Imagen;
  constructor() { }

  ngOnInit(): void {
  }

}
