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
  user!: any;


  ngOnInit() {
    this.user = localStorage.getItem('currentUser');
    this.user = JSON.parse(this.user);
  }

}
