import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product:any = {};

  constructor(private productService: ProductService,
              private router:Router) { }

  ngOnInit() {
  }

  save(form: NgForm){
    console.log("Save product");
    this.productService.saveProduct(form).subscribe(data => {
      this.goToList();
    }, error => console.error(error));
  }

  goToList(){
    this.router.navigate(['/product-list']);
  }

}
