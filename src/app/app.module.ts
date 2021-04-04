import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'; //biz ekledik. Db bağlanmak için
import {FormsModule, ReactiveFormsModule} from "@angular/forms"  //biz ekledik. ngModel çalışsın diye
import {BrowserAnimationsModule} from "@angular/platform-browser/animations" //biz ekledik. Animasyonlar kullanmadan, web sayfası geçişleri ani ve rahatsız edici görünebilir.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [ //kullanılacak componentler buraya eklenir
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    ProductAddComponent,
    LoginComponent
  ],
  imports: [  //dışarıdan bizim yazmadığımız modüller buraya eklenir. (Http,Toastr,Forms.. biz ekledik)
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right" //ekranda gözükmesi istenen yer, alt sağ
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true} //http interceptorlarını bütün http isteklerimize enjekte ediyoruz. 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
