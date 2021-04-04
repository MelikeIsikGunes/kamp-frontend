import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductComponent } from './components/product/product.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full" , component:ProductComponent}, //anasayfa adresinde hiçbir şey yazmıyorsa ProductComponent aç 
  {path:"products", component:ProductComponent}, // localhost:4200/products yazılsa da onu aç
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/add", component:ProductAddComponent, canActivate:[LoginGuard]}, //login olan kişiler ürün ekleme sayfasına gidebilir
  {path:"login", component:LoginComponent}
  //parametre için : kullanıyoruz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
