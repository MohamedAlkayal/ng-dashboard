import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { PaginationComponent } from '../pagination/pagination.component';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-controls',
  standalone: true,
  imports: [CommonModule, MatIcon, PaginationComponent],
  templateUrl: './table-controls.component.html',
})
export class TableControlsComponent {
  @Input() resualtsCount: number = 0;
  @Input() currentPage!: number;
  @Input() pagesCount!: number;
  @Input() selectedItems: string[] = [];
  @Input() dangerBtn!: string;
  @Input() warningBtn!: string;
  @Output() pageEmitter = new EventEmitter();

  getPage(data: any) {
    this.pageEmitter.emit(data);
  }
}
