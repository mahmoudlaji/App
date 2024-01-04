import { Injectable } from '@angular/core';
import { Product } from '../model/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Products!:Array<Product>;
  constructor() { 
    
    this.Products=[ 
      {nom:'laptop',prix:'300',reference:'1'},
     {nom:'phone',prix:'200',reference:'2'},
     {nom:'tv',prix:'500',reference:'3'}
    ]
  }
getAllProducts(){
  return this.Products
}


}
