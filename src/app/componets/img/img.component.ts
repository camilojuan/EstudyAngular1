import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  //ngDestroy and setInput
  counter = 0;
  counterFn: number | undefined;
  @Input() alt: string = "";
  //parmetros
  img: string = "Valor init primer ejemplo, imprimirlo en la etiqueta H1";
  @Input() imgPadre: string = "valor en el component de img";
  @Input() imgPadreInput: string = "valor inicial del input aunque no importa que vaya hay por que sera remplazado por lo que hay en el root";
  //se separo el input imgLoadingLink del input para crear como un metodo que resive como parametro la img
  imgLoadingLink: string = "";
  @Input() set changeImg(newImg: string){
    this.imgLoadingLink = newImg;
    console.log("change just img => ",this.imgLoadingLink);
  }
  imgDefault: string="https://picsum.photos/200";
  //salida de datos
  @Output() loaded = new EventEmitter <string>();
  //_______________________ ciclo de vida
  constructor() { 
    // before render
    // NO async -- once time-- no correr cosas asincronas como peticion a un servidor ejmplo:fetch, subscripcion
    //corre desde el inicio
    //solo corre una vez, cada vez que creamos este component se crea una instancia
    console.log('constructor', 'imgValue =>', this.imgLoadingLink);
    // poner algo que corra inmediato
    this.imgLoadingLink = "img en el constructor";
  }
  ngOnChanges(changes: SimpleChanges) {
    // before - during render antes y durante
    // changes inputs -- multiples times
    //actualizando los campios en los imputs, va a correr la sveces que actualicemos nuestros imputus
    console.log('ngOnChanges', 'imgValue =>', this.imgLoadingLink);
    console.log("changes", changes);
  }
  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    //correr cosas asincronas a comparacion del constructor
    //poner appis, fetch, promesas, cualquier cosa que necesitemos esperar un tiempo en la respueta del servidor
    console.log('ngOnInit', 'imgValue =>', this.imgLoadingLink);
    //una sola vez

    //ngDestroy and setInput
    this.counterFn= window.setInterval(()=> {
      this.counter += 1;
      console.log("run counter");
    }, 1000);
  }
  ngAfterViewInit() {
    // after render
    // handler children -- once time
    console.log('ngAfterViewInit');
    //manejamos los hijos, como el img, ng-template, otra imagen
  }
  ngOnDestroy() {
    // delete -- once time
    //ng crea un componente y cuando lo retiramos lo quita d ela interface
    console.log('ngOnDestroy');
    //destruir el contador
    window.clearInterval(this.counterFn);
  }

  //--------------------------para poner la imagen por defecto
  imgError(){
    this.imgLoadingLink = this.imgDefault;
  }
  imgLoaded(){
    console.log("log hijo");
    this.loaded.emit(this.imgLoadingLink);
  }
}
