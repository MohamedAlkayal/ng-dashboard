import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, MatIconModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent {
  constructor(private router: Router) {}

  @Input() data!: any;
  @Input() cols!: any;
  @Input() page!: string;
  @Input() isLoading: boolean = false;
  @Output() selectedEmiiter = new EventEmitter();

  selectedElements: any = [];
  isAllSelected: boolean = false;

  navigateTo(row: any) {
    this.router.navigate([`admin/${this.page}/${row._id}`]);
  }

  selectElement(row: any, event: Event) {
    event.stopPropagation();
    if (row.selected) {
      const index = this.selectedElements.indexOf(row._id);
      this.selectedElements.splice(index, 1);
      this.selectedEmiiter.emit(this.selectedElements);
    } else {
      this.selectedElements.push(row._id);
      this.selectedEmiiter.emit(this.selectedElements);
    }
  }

  selectAll() {
    if (this.isAllSelected) {
      this.selectedElements = [];
      this.data.map((u: any) => (u.selected = false));
      this.selectedEmiiter.emit(this.selectedElements);
    } else {
      this.data.map((u: any) => {
        this.selectedElements.push(u._id);
        u.selected = true;
      });
      this.selectedElements = [...new Set(this.selectedElements)];
      this.selectedEmiiter.emit(this.selectedElements);
    }
  }

  stopPropegation(row: any, event: Event) {
    event.stopPropagation();
  }
}
