import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl:string = "http://localhost:8080/product/";
  private speicalProductsUrl:string = "http://localhost:8080/specialProducts";

  constructor(private http:HttpClient) { }

  getAllProducts(): Observable<any> {
      return this.http.get(this.productsUrl);
  }

  getSpeicalProducts(): Observable<any> {
    return this.http.get(this.speicalProductsUrl);
  }

  getProduct(id: number): Observable<any>{
    return this.http.get(this.productsUrl + id);
  }

  removeProduct(id: number): Observable<any>{
    console.log("Delete " + id);
    return this.http.delete(this.productsUrl + id);
  }

  saveProduct(product: any): Observable<any>{
    console.log(product);
    return this.http.post(this.productsUrl, product);
  }

  updateProduct(id:number, product: any): Observable<any>{
    console.log("Update product ");
    return this.http.put(this.productsUrl + id, product);
  }

}
