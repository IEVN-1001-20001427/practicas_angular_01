import { Component } from '@angular/core';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent {

  operacion:string = '';
  temp:string = '';
  resultado:number = 0;

  calcular():void{
    switch(this.operacion){
      case 'c':
        this.cent();
        break;
      case 'f':
        this.far();
        break;
      default: break;
    }
  }

  cent():void{
    this.resultado = (parseInt(this.temp) - 32) * (5/9);
  }

  far():void{
    this.resultado = (parseInt(this.temp)* (9/5)) + 32 ;
  }

}
