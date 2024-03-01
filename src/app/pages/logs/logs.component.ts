import { Component, OnInit } from '@angular/core';
import { TableComponent } from '../../components/tableComponents/table/table.component';
import { AdminLogsService } from '../../services/admin-logs.service';

@Component({
  selector: 'app-logs',
  standalone: true,
  imports: [TableComponent],
  providers: [AdminLogsService],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.css',
})
export class LogsComponent {
  constructor(private adminLogsService: AdminLogsService) {}
  tableCols = [
    { lable: 'process', colData: 'process' },
    { lable: 'doneBy', colData: 'doneBy' },
    { lable: 'createdAt', colData: 'createdAt' },
    { lable: 'updatedAt', colData: 'updatedAt' },
  ];

  logs: any[] = [];
  ngOnInit() {
    this.adminLogsService.getAll().subscribe({
      next: (data: any) => {
        this.logs = data.logs;
      },
      error: (err) => console.log(err),
    });
  }
}
