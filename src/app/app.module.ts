import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MultiplicacionAxBComponent } from './ejercicios/multiplicacion-ax-b/multiplicacion-ax-b.component';
import { GradosComponent } from './ejercicios/grados/grados.component';
import { MenuComponent } from './menu/menu/menu.component';
import { CinepolisComponent } from './ejercicios/cinepolis/cinepolis.component';
import { HomeComponent } from './home/home.component';
import { ExamenP2Component } from './ejercicios/examen-p2/examen-p2.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiplicacionAxBComponent,
    GradosComponent,
    MenuComponent,
    CinepolisComponent,
    HomeComponent,
    ExamenP2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
