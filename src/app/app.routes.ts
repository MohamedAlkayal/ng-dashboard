import { Routes } from '@angular/router';
import { OrdersComponent } from './pages/ordersPages/orders/orders.component';
import { OneOrderComponent } from './pages/ordersPages/one-order/one-order.component';
import { HomeComponent } from './pages/homePages/home.component';
import { ProductsComponent } from './pages/productsPages/products/products.component';
import { OneProductComponent } from './pages/productsPages/one-product/one-product.component';
import { UsersComponent } from './pages/usersPages/users/users.component';
import { OneUserComponent } from './pages/usersPages/one-user/one-user.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth-guard.guard';
import { AdminComponent } from './layouts/admin/admin.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { ErrorComponent } from './layouts/error/error.component';
import { CategoryComponent } from './pages/categoriesPages/categories/category.component';
import { VouchersComponent } from './pages/vouchers/vouchers/vouchers.component';
import { LogsComponent } from './pages/logs/logs.component';
import { AdminsComponent } from './pages/adminPages/admins/admins.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,

    children: [
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        title: "Login" ,
      },
    ],
  },

  {
    path: 'admin',
    canActivate: [authGuard],
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
       title: "Admin" ,

      },
      {
        path: 'home',
        canActivate: [authGuard],
        component: HomeComponent,
       title: "Home" ,

      },
      {
        path: 'orders',
        canActivate: [authGuard],
        children: [
          { path: '', component: OrdersComponent },
          { path: ':order_ID', component: OneOrderComponent },

        ],
       title: "Orders" ,

      },
      {
        path: 'products',
        canActivate: [authGuard],
        children: [
          { path: '', component: ProductsComponent },
          { path: ':product_ID', component: OneProductComponent },
          { path: 'add', component: OneProductComponent },
        ],
       title: "Products" ,

      },
      {
        path: 'users',
        canActivate: [authGuard],
        children: [
          { path: '', component: UsersComponent },
          { path: ':user_ID', component: OneUserComponent },
        ],
       title: "Users" ,

      },
      {
        path: 'categories',
        canActivate: [authGuard],
        children: [{ path: '', component: CategoryComponent }],
      },
      {
        path: 'vouchers',
        canActivate: [authGuard],
        children: [{ path: '', component: VouchersComponent }],
      },
      {
        path: 'authorization',
        canActivate: [authGuard],
        children: [{ path: '', component: AdminsComponent }],
      },
      {
        path: 'logs',
        canActivate: [authGuard],
        children: [{ path: '', component: LogsComponent }],
      },
    ],
  },
  { path: '**', component: ErrorComponent },
];
