import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {

  costoboleto:number = 12000;

  nombre:string = '';
  compradores:number = 0;
  tarjeta:string = 'no';
  boletos:number = 0;

  total:number = 0;

  mensaje:string = '';

  procesar():void {
    this.mensaje = '';
    this.total = 0;


    if(this.boletos/this.compradores > 7){
      this.mensaje = 'no se pueden comprar mas de 7 boletos por persona'
    }else if(this.boletos > 2){
      if(this.boletos > 5){
        this.total = (this.costoboleto*this.boletos)*.85;
        this.mensaje = 'Es credor a un 15% de descuento por su compra';
      }else{
        this.total = (this.costoboleto*this.boletos)*.9;
        this.mensaje = 'Es credor a un 10% de descuento por su compra';
      }
    }else{
      this.total = this.costoboleto*this.boletos;
    }

    console.log(this.tarjeta);

    if(this.tarjeta == 'si'){
      this.total = this.total * .9;
      this.mensaje += ' - Cuenta con un 10% sobre el saldo anterior por el pago con su tarjeta'
    }
  }

}
