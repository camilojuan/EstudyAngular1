import { Component, OnInit } from '@angular/core';
//interface
import { Product} from '../../models/product.model';
//Importar nuestro servicio
import { StoreService} from '../../services/store.service';
//servicio para la appi
import { ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private storeService: StoreService,
    private productosAppi: ProductsService
  ) {
    this.myShopingCart =this.storeService.getShopingCart();
  }

  ngOnInit(): void {
    //manejar cosas asincronas como la appi
    this.productosAppi.getAllProducts()
    //aqui no se que pas apero si quito el punto y coma no da el susbcri
    //patron llamados obserbables con una funcion llamada susbcrip
    .subscribe(data =>{
      //imprime todos los datos de la appi con console.log(data);
      this.newProducts = data;
    });
  }
  //carrito de compra
   myShopingCart:Product[]=[];
   total: number= 0;
  //----------------------- product

  newProducts: Product[]=[];
  onAddToShopingCart(product: Product){
    // this.myShopingCart.push(product);
    // //para hacer el total se utiliza un metodo dentro del array que nos permite reducir a solo el termino a utilizar
    //  this.total = this.myShopingCart.reduce((sum, item)=> sum + item.price,0);

    //ahora despues de ineyctar el servisio
    this.storeService.addProduct(product);
    this.total =this.storeService.getTotal();
  }
}
