import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSideComponent } from './components/navComponents/nav-side/nav-side.component';
import { HttpClientModule } from '@angular/common/http';
import { NavHeaderComponent } from './components/navComponents/nav-header/nav-header.component';
import { AdminServices } from './services/admin.service';
import { TokenUtilsService } from './services/token/token-utils.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavSideComponent,
    HttpClientModule,
    NavHeaderComponent,
  ],
  providers: [AdminServices, TokenUtilsService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard';

  constructor(private auth: AdminServices, private token: TokenUtilsService) {}

  user!: any;

  ngOnInit() {
    this.auth.loginAdmin('jessica', 'jessicaPassword@A1').subscribe({
      next: (data) => {
        this.user = data;
        this.token.storeTokenAdmin(data);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
