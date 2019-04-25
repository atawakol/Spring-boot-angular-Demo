import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl:string = "http://localhost:8080/product";
  private speicalProductsUrl:string = "http://localhost:8080/specialProducts";

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any> {
      return this.http.get(this.productsUrl);
  }

  getSpeicalProducts(): Observable<any> {
    return this.http.get(this.speicalProductsUrl);
}

}
