import { PaginacionPipe } from './../pipes/paginacion.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    HomeComponent,
    PaginacionPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatPaginatorModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
