import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductroutesService {

  url: string = 'http://localhost:3000/api/products';

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get(this.url);
  }

  createProduct(product: any){
    return this.http.post(this.url, product);
  }

  updateProduct(product: any){
    return this.http.put(`${this.url}/${product._id}`, product);
  }

  deleteProduct(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }

}
