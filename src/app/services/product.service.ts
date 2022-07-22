import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  private url:string = "assets/products.json"
  constructor(private _httpClient:HttpClient){}
  getProductInfo(){
   return this._httpClient.get(this.url)
  }
}
