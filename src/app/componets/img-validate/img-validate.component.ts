import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img-validate',
  templateUrl: './img-validate.component.html',
  styleUrls: ['./img-validate.component.scss']
})
export class ImgValidateComponent implements OnInit {
  //variables
  imgLoadingLink: string = "";
  @Input("img") set changeImg(newImg: string){
    this.imgLoadingLink = newImg;
    console.log("change just img => ",this.imgLoadingLink);
  }
  imgDefault: string="https://picsum.photos/200";
  alt:string ="";
  //salida de datos
   @Output() loaded = new EventEmitter <string>();

  constructor() {

  }

  ngOnInit(): void {

  }
  //si hay error al cargar la imagen
  imgError(){
    this.imgLoadingLink = this.imgDefault;
  }

  imgLoaded(){
    console.log("log hijo");
    this.loaded.emit(this.imgLoadingLink);
  }
}
