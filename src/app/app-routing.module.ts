import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { CinepolisComponent } from "./ejercicios/cinepolis/cinepolis.component";
import { GradosComponent } from "./ejercicios/grados/grados.component";
import { MultiplicacionAxBComponent } from "./ejercicios/multiplicacion-ax-b/multiplicacion-ax-b.component";
import { HomeComponent } from "./home/home.component";
import { ExamenP2Component } from "./ejercicios/examen-p2/examen-p2.component";

const routes:Routes=[
    {path: '', redirectTo:'/home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'cinepolis', component: CinepolisComponent},
    {path: 'grados', component: GradosComponent},
    {path: 'multiplicacion', component: MultiplicacionAxBComponent},
    {path: 'examenp2', component: ExamenP2Component}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}