import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProductItemComponent } from './features/products/product-item/product-item.component';
import { ProductListComponent } from './features/products/product-list/product-list.component';
import { ProductContainerComponent } from './features/products/product-container/product-container.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductService } from './_services/product.service';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegistrationComponent } from './authorization/registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    NavbarComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductContainerComponent,
    DropDownComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    NotFoundComponent,
    AboutComponent,
    ContactUsComponent,
    AddProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
