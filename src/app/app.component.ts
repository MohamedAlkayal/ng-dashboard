import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FilterTextComponent } from './components/filtersComponents/filter-text/filter-text.component';
import { FilterNumberComponent } from './components/filtersComponents/filter-number/filter-number.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl } from '@angular/forms';
import { FilterDropdownComponent } from './components/filtersComponents/filter-dropdown/filter-dropdown.component';
import { InputTextComponent } from './components/formComponents/input-text/input-text.component';
import { InputDropdownComponent } from './components/formComponents/input-dropdown/input-dropdown.component';
import { InputTwoFieldsComponent } from './components/formComponents/input-two-fields/input-two-fields.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LoginComponent,
    InputTwoFieldsComponent,
    InputTextComponent,
    InputDropdownComponent,
    FilterDropdownComponent,
    FilterTextComponent,
    FilterNumberComponent,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard';
  // this data should be requested from an end point
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
