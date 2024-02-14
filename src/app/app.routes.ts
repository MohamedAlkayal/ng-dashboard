import { Routes } from '@angular/router';
import { HomeComponent } from './pages/homePages/home.component';
import { OrdersComponent } from './pages/ordersPages/orders/orders.component';
import { OneOrderComponent } from './pages/ordersPages/one-order/one-order.component';
import { ProductsComponent } from './pages/productsPages/products/products.component';
import { AddProductComponent } from './pages/productsPages/add-product/add-product.component';
import { OneProductComponent } from './pages/productsPages/one-product/one-product.component';
import { UsersComponent } from './pages/usersPages/users/users.component';
import { OneUserComponent } from './pages/usersPages/one-user/one-user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'orders',
    children: [
      { path: '', component: OrdersComponent },
      { path: ':order_ID', component: OneOrderComponent },
    ],
  },
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
      { path: ':product_ID', component: OneProductComponent },
      { path: 'add', component: AddProductComponent },
    ],
  },
  {
    path: 'users',
    children: [
      { path: '', component: UsersComponent },
      { path: ':user_ID', component: OneUserComponent },
    ],
  },
];
