import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
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
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) {} //bir servisi kullanabilmek için
  //ActivatedRoute mevcut olan route

  //ProductComponent açıldığında ilk çalışan kodlar
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"]); //metod çağırma
      }else{
        this.getProducts();
      }
    })//params-parametreler
    
  }

  //metod-fonksiyon
  //subscribe asenkron çalışıyor
  getProducts() {
     this.productService.getProducts().subscribe(response=>{
       this.products=response.data
       this.dataLoaded=true;
     })    
  }

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products=response.data
      this.dataLoaded=true;
    })    
 }
}
