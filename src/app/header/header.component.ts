import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  shoppingCart: Iproduct[];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.shoppingCart = this.productService.getShoppingCart();
  }
}
