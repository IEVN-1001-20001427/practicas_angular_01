import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MultiplicacionAxBComponent } from './ejercicios/multiplicacion-ax-b/multiplicacion-ax-b.component';
import { GradosComponent } from './ejercicios/grados/grados.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { MenuComponent } from './menu/menu/menu.component';
import { CinepolisComponent } from './ejercicios/cinepolis/cinepolis.component';


@NgModule({
  declarations: [
    AppComponent,
    MultiplicacionAxBComponent,
    GradosComponent,
    MenuComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
