import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { myMatchOptions } from '../../../utilities/IsActiveMatchOptions';

@Component({
  selector: 'app-nav-side',
  standalone: true,
  imports: [RouterModule, NgClass, CommonModule, MatIconModule],
  templateUrl: './nav-side.component.html',
  styles: '',
})
export class NavSideComponent {
  constructor(private route: Router) {}

  @Input() user!: {
    message: string;
    token: string;
    username: string;
    authorities: {
      users: boolean;
      orders: boolean;
      products: boolean;
      categories: boolean;
      vouchers: boolean;
      admin: boolean;
    };
  };

  myMatchOptions = myMatchOptions;
}
