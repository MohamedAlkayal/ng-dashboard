import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() pagesCount!: number;
  @Output() pageEmitter = new EventEmitter();

  get visiblePageNumbers(): number[] {
    const first = 1;
    const current = this.currentPage;
    const last = this.pagesCount;
    let visiblePages: any[] = [];

    switch (true) {
      case last < 6:
        for (let i = 1; i <= last; i++) {
          visiblePages.push(i);
        }
        break;

      case first === current:
        visiblePages = [current, current + 1, current + 2, '...', last];
        break;

      case first + 1 === current:
        visiblePages = [current - 1, current, current + 1, '...', last];
        break;

      case first + 2 === current:
        visiblePages = [first, current - 1, current, current + 1, '...', last];
        break;

      case first + 2 < current && current < last - 2:
        visiblePages = [
          first,
          '...',
          current - 1,
          current,
          current + 1,
          '...',
          last,
        ];
        break;

      case current === last - 2:
        visiblePages = [first, '...', current, current + 1, last];
        break;

      case current === last - 1:
        visiblePages = [first, '...', current - 1, current, last];
        break;

      default:
        visiblePages = [first, '...', current - 2, current - 1, last];
        break;
    }
    return visiblePages;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.pageEmitter.emit(`${this.currentPage - 1}`);
    }
  }
  goToPage(n: any) {
    this.pageEmitter.emit(`${n}`);
    console.log(n);
  }
  nextPage() {
    if (this.currentPage < this.pagesCount) {
      this.pageEmitter.emit(`${this.currentPage + 1}`);
    }
  }
}
