import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  dataLoaded=false;
  

  //constructor: //new'lemek, instance üretmek
  constructor(private productService:ProductService) {} //bir servisi kullanabilmek için

  //ProductComponent açıldığında ilk çalışan kodlar
  ngOnInit(): void {
    this.getProducts(); //metod çağırma
  }

  //metod-fonksiyon
  //subscribe asenkron çalışıyor
  getProducts() {
     this.productService.getProducts().subscribe(response=>{
       this.products=response.data
       this.dataLoaded=true;
     })
     
  }
}
