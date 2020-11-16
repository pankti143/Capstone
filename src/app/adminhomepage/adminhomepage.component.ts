import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {IProduct} from 'src/app/entities/product/product.model';
import{ProductService} from 'src/app/entities/product/product.service';

@Component({
  selector: 'app-adminhomepage',
  templateUrl: './adminhomepage.component.html',
  styleUrls: ['./adminhomepage.component.css']
})
export class AdminhomepageComponent implements OnInit {
  createdProduct: IProduct = null;
  constructor() { }

  ngOnInit(): void {
  }
 // Get the new product created.
 onCreatedProduct(createdProduct: IProduct) {
  this.createdProduct = createdProduct;
}
}

