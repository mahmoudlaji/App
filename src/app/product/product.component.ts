import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.component';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
Products!:Array<Product>

  constructor(private productService: ProductService){

  }
ngOnInit(): void {
  this.Products=this.productService.getAllProducts()

}

deleteProdect(data:any){
  let comf= confirm("are you sure to delete this product")
  if(comf){
  let index = this.Products.indexOf(data)
  this.Products.splice(index,1)
}
}
}
