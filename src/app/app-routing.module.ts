import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProductorderComponent } from './components/productorder/productorder.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'shop',component:ShopComponent,children:[
    {path:':category', component:CategoryComponent}
  ]},
  {path:'product/:id', component:ProductComponent},
  {path:'shopping-cart',component:ShoppingcartComponent},
  {path:'login', component:LoginComponent},
  {path:'sign-up', component:SignupComponent},
  {path:'product-order',component:ProductorderComponent},
  {path:'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
