import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //backend'e istekte bulunabilmek için(api çağrısı)
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44347/api/';


  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl+"products/getall"; //let olan değişkene dışarıdan ulaşamayız. Sadece bu fonk içinde
    return this.httpClient.get<ListResponseModel<Product>>(newPath) //gelen datayı ProductResponseModele maple
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl+"products/getbycategory?categoryId="+categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  
}
