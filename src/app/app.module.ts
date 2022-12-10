import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialSidebarComponent } from './components/social-sidebar/social-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShopComponent } from './components/shop/shop.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ShoppingcartComponent } from './components/shoppingcart/shoppingcart.component';
import { ProductorderComponent } from './components/productorder/productorder.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryOrder } from './services/in-memory-order';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SocialSidebarComponent,
    ShopComponent,
    CategoryComponent,
    ProductComponent,
    LoginComponent,
    SignupComponent,
    ShoppingcartComponent,
    ProductorderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule, HttpClientInMemoryWebApiModule.forRoot(
      InMemoryOrder,{dataEncapsulation:false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
