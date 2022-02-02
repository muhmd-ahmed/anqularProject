import { ProductListComponent } from './features/products/product-list/product-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductContainerComponent } from './features/products/product-container/product-container.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './features/products/product-details/product-details.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegistrationComponent } from './authorization/registration/registration.component';

const routes: Routes = [
  {path:'home',component: ProductContainerComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'login/register',component:RegistrationComponent},
  {path:'about',component:AboutComponent},
  {path:'product',children:[
    {path:'add',component:AddProductComponent},
    {path:'details/:productId',component:ProductDetailsComponent}
  ]},

  
   {path:'add-product',component:AddProductComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'product-listing',component:ProductListComponent},


  
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
