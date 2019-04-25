import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Array<any>;

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.getSpeicalProducts().subscribe(data => {
        this.products = data;
    });
  }

}
