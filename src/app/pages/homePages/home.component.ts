import { Component } from '@angular/core';
import { LogsComponent } from '../logs/logs.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
