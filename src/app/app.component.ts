import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardCtaComponent } from './components/cardComponents/card-cta/card-cta.component';
import { CardAlertComponent } from './components/cardComponents/card-alert/card-alert.component';
import { CardPromptComponent } from './components/cardComponents/card-prompt/card-prompt.component';
import { PromptDangerComponent } from './components/messagesComponents/prompt-danger/prompt-danger.component';
import { PromptConfirmComponent } from './components/messagesComponents/prompt-confirm/prompt-confirm.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CardCtaComponent,
    CardAlertComponent,
    CardPromptComponent,
    PromptDangerComponent,
    PromptConfirmComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard';
}
