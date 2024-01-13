import { Component } from '@angular/core';

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
}
