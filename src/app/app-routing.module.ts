import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { AuthGuard } from './_auth/auth.guard';
import { AddNewProductComponent } from './add-new-product/add-new-product.component';
import { ShowProductDetailsComponent } from './show-product-details/show-product-details.component';
import { ProductResolveService } from './product-resolve.service';
import { ProductViewDetailsComponent } from './product-view-details/product-view-details.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { BuyProductResolverService } from './buy-product-resolver.service';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent
  },
  {
    path: 'addNewProduct',
    component: AddNewProductComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] },
    resolve: {
      product: ProductResolveService
    }
  },
  {
    path: 'showProductDetails',
    component: ShowProductDetailsComponent,
    canActivate: [AuthGuard],
    data: { roles: ['Admin'] }
  },
  {
    path: 'productViewDetails',
    component: ProductViewDetailsComponent,
    resolve: { product: ProductResolveService }
  },
  {
    path: 'buyProduct',
    component: BuyProductComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] },
    resolve: {
      productDetails: BuyProductResolverService
    },
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthGuard],
    data: { roles: ['User'] }
  },
  {
    path: "orderConfirm",
    component: OrderConfirmationComponent,
    canActivate: [AuthGuard],
    data: { roles: ["User"] }
  },
  {
    path: "register",
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
