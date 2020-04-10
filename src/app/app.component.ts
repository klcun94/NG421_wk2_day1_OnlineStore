import { Component, OnInit } from '@angular/core';
import { Iproduct } from './models/iproduct';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Array<Iproduct>;
  product: Iproduct;

  constructor(private productService: ProductService) {

  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  productWasAdded(product: Iproduct): void {
    this.productService.addToCart(product);
  }
}
