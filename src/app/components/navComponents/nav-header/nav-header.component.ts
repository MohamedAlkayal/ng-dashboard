import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './nav-header.component.html',
  styleUrl: './nav-header.component.css',
})
export class NavHeaderComponent {
  constructor(private router: Router) {}

  @Input() user!: any;

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate([`/login`]);
  }
}
