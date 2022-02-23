import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../shared/material/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatePipe } from './pipes/paginate.pipe';




@NgModule({
  declarations: [
    HomeComponent,
    PaginatePipe,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
