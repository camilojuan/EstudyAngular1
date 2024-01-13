import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  img: string = "Valor init primer ejemplo, imprimirlo en la etiqueta H1";
  @Input() imgPadre: string = "valor en el component de img";
  @Input() imgPadreInput: string = "valor inicial del input aunque no importa que vaya hay por que sera remplazado por lo que hay en el root";
  @Input() imgLoadingLink: string = "";
  imgDefault: string="https://picsum.photos/200";
  constructor() { }

  ngOnInit(): void {
  }

}
