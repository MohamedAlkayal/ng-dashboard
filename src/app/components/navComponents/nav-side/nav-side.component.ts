import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-side',
  standalone: true,
  imports: [RouterModule, NgClass],
  templateUrl: './nav-side.component.html',
  styleUrl: './nav-side.component.css',
})
export class NavSideComponent {
  @Input() user!: {
    message: string;
    token: string;
    username: string;
    authorities: {
      users: boolean;
      orders: boolean;
      products: boolean;
      categories: boolean;
    };
  };

  selectedClass = 'bg-dark text-light';
  selectedTab = 'home';

  select(name: string) {
    this.selectedTab = name;
  }
}
