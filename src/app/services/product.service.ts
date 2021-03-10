import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //backend'e istekte bulunabilmek için(api çağrısı)
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44347/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.httpClient.get<ProductResponseModel>(this.apiUrl) //gelen datayı ProductResponseModele maple
  }
}
