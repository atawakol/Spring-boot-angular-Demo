import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product:any = {};
  productId: number = 0;

  constructor(private productService: ProductService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      console.log("id is " + this.productId);
      console.log(this.productId);
      if (this.productId) {
        this.productService.getProduct(this.productId).subscribe(data => {
          this.product = data
          console.log("Product retrived + " + data);
        });
        console.log("Product request sent....");
      }
    });
  }

  submit(form: NgForm){
    console.log("Save product");
    if (!this.productId) {
      this.save(form);
    }
    else {
      this.update(form);
    }
  }

  remove(id:number) {
    this.productService.removeProduct(id).subscribe(data => {
      this.goToList();
    }, error => console.error(error));
  }

  goToList(){
    this.router.navigate(['/product-list']);
  }

  private save(form: NgForm){
    this.productService.saveProduct(form).subscribe(data => {
      this.goToList();
    }, error => console.error(error));
  }

  private update(form: NgForm){
    this.productService.updateProduct(this.productId, form).subscribe(data => {
      this.goToList();
    }, error => console.error(error));
  }

}
