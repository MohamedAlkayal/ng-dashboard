import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-side',
  standalone: true,
  imports: [],
  templateUrl: './nav-side.component.html',
  styleUrl: './nav-side.component.css',
})
export class NavSideComponent {
  @Input() authorities!: {
    Users: boolean;
    Orders: boolean;
    Products: boolean;
    Categories: boolean;
  };
}
