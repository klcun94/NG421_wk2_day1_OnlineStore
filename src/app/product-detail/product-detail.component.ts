import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Iproduct;
  @Output() productAdded = new EventEmitter <Iproduct>();

  constructor() {

  }

  ngOnInit() {
  }

  addToCart() {
    this.productAdded.emit(this.product);
  }
}
