import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; //biz ekledik. Db bağlanmak için
import {FormsModule} from "@angular/forms"  //biz ekledik. ngModel çalışsın diye
import {BrowserAnimationsModule} from "@angular/platform-browser/animations" //biz ekledik. Animasyonlar kullanmadan, web sayfası geçişleri ani ve rahatsız edici görünebilir.

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import {ToastrModule} from "ngx-toastr";
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component'

@NgModule({
  declarations: [ //kullanılacak componentler buraya eklenir
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent
  ],
  imports: [  //dışarıdan bizim yazmadığımız modüller buraya eklenir. (Http,Toastr,Forms.. biz ekledik)
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right" //ekranda gözükmesi istenen yer, alt sağ
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
