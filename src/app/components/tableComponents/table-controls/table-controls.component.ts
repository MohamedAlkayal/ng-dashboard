import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-controls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-controls.component.html',
})
export class TableControlsComponent {
  @Input() items!: any;
  @Input() selectedItems!: string[];
  @Input() dangerBtn!: string;
  @Input() warningBtn!: string;
}
