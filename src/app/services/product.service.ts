import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { products } from '../products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  shoppingCart: Array<Iproduct> = [];
  products: Array<Iproduct>;
  constructor() {
    this.products = products;
  }

  getProducts(): Array<Iproduct> {
    return this.products;
  }

  getShoppingCart(): Array<Iproduct> {
    return this.shoppingCart;
  }

  addToCart(product: Iproduct) {
    this.shoppingCart.push(product);
  }
}
