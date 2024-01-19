import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Product}from "../../models/product.model"
import {ProductExample}from "../../models/productExample"


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  @Input() Product: Product = {
    id: "",
    title:"",
    image:"",
    price: 0,
    description: "",
    category: ""
  }
  @Input() ProductExample: ProductExample = {
    id: "",
    name:"",
    image:"",
    price: 0,
  }
  @Output() addedProduct = new EventEmitter <Product>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddTocart(){
    //++console.log(this.Product);
    this.addedProduct.emit(this.Product);
      
  }

}
