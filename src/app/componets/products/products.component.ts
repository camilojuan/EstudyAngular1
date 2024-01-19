import { Component, OnInit } from '@angular/core';
//interface
import { Product} from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //carrito de compra
  myShopingCart:Product[]=[];
  total: number= 0;
  //----------------------- product

  newProducts: Product[]=[
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: '../../assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
  ];
  onAddToShopingCart(product: Product){
    this.myShopingCart.push(product);
    //para hacer el total se utiliza un metodo dentro del array que nos permite reducir a solo el termino a utilizar
     this.total = this.myShopingCart.reduce((sum, item)=> sum + item.price,0);
  }
}
