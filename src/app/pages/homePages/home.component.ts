import { Component } from '@angular/core';
import { TableComponent } from '../../components/tableComponents/table/table.component';
import { FailedComponent } from '../../components/messagesComponents/failed/failed.component';
import { InvoiceComponent } from '../../components/invoice/invoice.component';
import { PromptDangerComponent } from '../../components/messagesComponents/prompt-danger/prompt-danger.component';
import { OpenTicketComponent } from '../../components/messagesComponents/open-ticket/open-ticket.component';
import { PromptConfirmComponent } from '../../components/messagesComponents/prompt-confirm/prompt-confirm.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent,PromptDangerComponent,OpenTicketComponent,PromptConfirmComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {




}
