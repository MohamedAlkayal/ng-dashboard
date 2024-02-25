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
  imports: [RouterOutlet, NavSideComponent, InputTextareaComponent],

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

  ngOnInit() {
    this.auth.loginAdmin('jessica', 'jessicaPassword@A1').subscribe({
      next: (data) => {
        this.token.storeToken(data);
      },
      error(err) {
        console.log(err);
      },
    });
  }

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
    },
  };
}
