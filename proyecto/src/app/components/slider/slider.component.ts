import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

   @Input() titulo : string = "Mejores restaurantes de la zona"
   @Input() listas : any = [];

  movimiento          : number = 0

  numElementos        : number = 0
  numElementosVisible : number = 3
  numVecesMueve       : number = 0
  anchoSlide          : number = 0
  traslateSlide       : number = 0
  anchoElemento       : number = 0


  constructor() { 

  }

  aumentarMovimiento() : void{
    this.movimiento++
    if(this.movimiento >= this.numVecesMueve){
      this.movimiento = 0

    }
  }

  disminuirMovimiento() : void {
    this.movimiento--

    if(this.movimiento < 0){
      this.movimiento = this.numVecesMueve - 1
    }
  }

  valorAnchoSlide() : string {
    return `${this.anchoSlide}%`
  }

  valorAnchoArticle() : string {
    return `${this.anchoSlide}%`
  }

  valorTranslate() : string {
    return `translateX(${this.movimiento * -this.traslateSlide}%)`
  }

  valorGrid() : string {
    return `repeat(${this.numElementos}, 1fr)`
  }


  ngOnInit(): void {

  }

}
