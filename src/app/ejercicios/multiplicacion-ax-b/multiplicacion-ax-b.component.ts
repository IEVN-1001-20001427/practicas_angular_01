import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-ax-b',
  templateUrl: './multiplicacion-ax-b.component.html',
  styleUrls: ['./multiplicacion-ax-b.component.css']
})
export class MultiplicacionAxBComponent {

  num1:number = 0;
  num2:number = 0;
  res:string = '';
  rs:number = 0;

  multiplicar():void{
    this.res = ''
    this.rs = 0;
    //this.rs = this.num1 * this.num2;

    for(let i=0; i<this.num2; i++){
      if(i==0){
        this.res = this.res +''+ this.num1;
      }else{
        this.res = this.res +' + '+ this.num1;
      }

      this.rs+=this.num1;
    }

    this.res = this.res +' = '+ this.rs;
  }

}
