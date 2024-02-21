import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTextareaComponent } from './components/formComponents/input-textarea/input-textarea.component';
import { InputInnerLableComponent } from './components/formComponents/input-inner-lable/input-inner-lable.component';
import { NavSideComponent } from './components/navComponents/nav-side/nav-side.component';
<<<<<<< HEAD
import { PromptConfirmComponent } from './components/messagesComponents/prompt-confirm/prompt-confirm.component';
import { PromptDangerComponent } from './components/messagesComponents/prompt-danger/prompt-danger.component';
=======
import { HttpClientModule } from '@angular/common/http';
>>>>>>> origin

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavSideComponent, HttpClientModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard';

  // constructor(private auth: AdminServices) {}

  // ngOnInit() {
  //   this.auth.loginAdmin("")
  // }

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
