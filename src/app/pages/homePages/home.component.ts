import { Component } from '@angular/core';
import { TableComponent } from '../../components/tableComponents/table/table.component';
import { FailedComponent } from '../../components/messagesComponents/failed/failed.component';
import { InvoiceComponent } from '../../components/invoice/invoice.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {




}
