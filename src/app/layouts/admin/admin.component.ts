import { Component } from '@angular/core';
import { HomeComponent } from '../../pages/homePages/home.component';
import { OrdersComponent } from '../../pages/ordersPages/orders/orders.component';
import { UsersComponent } from '../../pages/usersPages/users/users.component';
import { ProductsComponent } from '../../pages/productsPages/products/products.component';
import { NavSideComponent } from '../../components/navComponents/nav-side/nav-side.component';
import { RouterOutlet } from '@angular/router';
import { NavHeaderComponent } from '../../components/navComponents/nav-header/nav-header.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    HomeComponent,
    OrdersComponent,
    UsersComponent,
    ProductsComponent,
    NavSideComponent,
    RouterOutlet,
    NavHeaderComponent,
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  title = 'dashboard';

  user = {
    message: 'Login successful',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzkyZWYwYjZhYjE3YzdmY2IwMzQ5MiIsImF1dGhvcml0aWVzIjp7IlVzZXJzIjp0cnVlLCJPcmRlcnMiOnRydWUsIlByb2R1Y3RzIjp0cnVlLCJDYXRlZ29yaWVzIjp0cnVlfSwiaWF0IjoxNzA3OTIyNTI2LCJleHAiOjE3MDc5Mjk3MjZ9.HnIKeakfrmTT-2sgCs6zfPDIldVNStCCmm8Za95KTgA',
    username: 'user345',
    authorities: {
      users: true,
      orders: true,
      products: true,
      categories: true,
      vouchers: true,
      logs: true,
    },
  };
}
