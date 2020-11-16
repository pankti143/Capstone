import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ProductService } from 'src/app/entities/product/product.service';
import { IProduct } from 'src/app/entities/product/product.model';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit, OnChanges  {

  products: Array<IProduct> = [];
   imgArray:ImageData[]
 
  @Input() productToDisplay: IProduct = null;

  constructor(protected productService: ProductService) { }

  // Load all the products when starting the view.
  ngOnInit(): void {
    this.loadAll();
  }

  // If new product created, we add it to the list.
  ngOnChanges(): void {
    if (this.productToDisplay !== null) {
      this.products.push(this.productToDisplay);
    }
  }
  // Load all products.
  private loadAll() {
    this.productService
      .get()
      .then((result: Array<IProduct>) => {
        this.products = result;
      });
    }
  
  }
