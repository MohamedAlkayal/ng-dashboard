import { Component } from '@angular/core';
import { NavSideComponent } from '../../../components/navComponents/nav-side/nav-side.component';
import { PromptDangerComponent } from '../../../components/messagesComponents/prompt-danger/prompt-danger.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [PromptDangerComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
