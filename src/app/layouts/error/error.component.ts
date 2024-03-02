import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
})
export class ErrorComponent {
  constructor(private router: Router) {}

  routeHome() {
    this.router.navigate(['admin/home']);
  }
}
