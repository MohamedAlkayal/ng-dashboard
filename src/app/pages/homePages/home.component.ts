import { Component } from '@angular/core';
import { TableComponent } from '../../components/tableComponents/table/table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent,PromptDangerComponent,OpenTicketComponent,PromptConfirmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
