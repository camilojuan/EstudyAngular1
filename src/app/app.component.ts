import { Component } from '@angular/core';
//para poder utilizar el tipado de producto en esta clase
import {Product} from "./models/product.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  ImgParentDinamic ="texto dinamico desde root";
  //ImgRender = "https://www.w3schools.com/howto/img_avatar.png";
  //ingresarla en vacio para poder que se eva la imagen por defecto
  ImgRender = "";

  //img validate
  imgValidate="";
  //ngDestroy and set input min:5
  showImg = true;
  toggleImg(){
    this.showImg = !this.showImg;
  }
  //
  onloaded(imgParameter: string){
    console.log("log padre", imgParameter);
  } 
  
  //----------------------- product
  products: Product[]=[
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://picsum.photos/200'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://picsum.photos/200'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://picsum.photos/200'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://picsum.photos/200'
    },
  ];
  
}
