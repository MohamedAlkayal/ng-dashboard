import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavSideComponent } from './components/navComponents/nav-side/nav-side.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavSideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard';
  user = {
    message: 'Login successful',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YzkyZWYwYjZhYjE3YzdmY2IwMzQ5MiIsImF1dGhvcml0aWVzIjp7IlVzZXJzIjp0cnVlLCJPcmRlcnMiOnRydWUsIlByb2R1Y3RzIjp0cnVlLCJDYXRlZ29yaWVzIjp0cnVlfSwiaWF0IjoxNzA3OTIyNTI2LCJleHAiOjE3MDc5Mjk3MjZ9.HnIKeakfrmTT-2sgCs6zfPDIldVNStCCmm8Za95KTgA',
    authorities: {
      Users: true,
      Orders: true,
      Products: true,
      Categories: true,
    },
  };
}
