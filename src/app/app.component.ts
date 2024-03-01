import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenUtilsService } from './services/token/token-utils.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard';
  constructor(private tokenService: TokenUtilsService) {}
  user!: any;
  ngOnInit() {
    setTimeout(() => {
      this.tokenService.cheackForTokenExpiration();
    }, 1);
  }
}

