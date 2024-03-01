import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent {
  @Input() pagesCount!: number;
  @Input() pageName!: string;
  @Output() pageEmitter = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router) {}

  currentPage!: number;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] ? +params['page'] : 1;
    });
  }

  get visiblePageNumbers(): number[] {
    const first = 1;
    const last = this.pagesCount;
    let visiblePages: any[] = [];

    switch (true) {
      case this.pagesCount < 6:
        for (let i = 1; i <= this.pagesCount; i++) {
          visiblePages.push(i);
        }
        break;

      case first === this.currentPage:
        visiblePages = [
          this.currentPage,
          this.currentPage + 1,
          this.currentPage + 2,
          '...',
          this.pagesCount,
        ];
        break;

      case first + 1 === this.currentPage:
        visiblePages = [
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          '...',
          this.pagesCount,
        ];
        break;

      case first + 2 === this.currentPage:
        visiblePages = [
          first,
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          '...',
          this.pagesCount,
        ];
        break;

      case first + 2 < this.currentPage &&
        this.currentPage < this.pagesCount - 2:
        visiblePages = [
          first,
          '...',
          this.currentPage - 1,
          this.currentPage,
          this.currentPage + 1,
          '...',
          this.pagesCount,
        ];
        break;

      case this.currentPage === this.pagesCount - 2:
        visiblePages = [
          first,
          '...',
          this.currentPage,
          this.currentPage + 1,
          this.pagesCount,
        ];
        break;

      case this.currentPage === this.pagesCount - 1:
        visiblePages = [
          first,
          '...',
          this.currentPage - 1,
          this.currentPage,
          this.pagesCount,
        ];
        break;

      default:
        visiblePages = [
          first,
          '...',
          this.currentPage - 2,
          this.currentPage - 1,
          this.pagesCount,
        ];
        break;
    }
    return visiblePages;
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
      this.navigateWithQueryParam();

      this.pageEmitter.emit(this.currentPage);
    }
  }
  goToPage(n: any) {
    if (isFinite(n)) {
      this.currentPage = n;
      this.navigateWithQueryParam();

      this.pageEmitter.emit(this.currentPage);
    }
  }
  nextPage() {
    if (this.currentPage < this.pagesCount) {
      this.currentPage += 1;
      this.navigateWithQueryParam();
      this.pageEmitter.emit(this.currentPage);
    }
  }

  private navigateWithQueryParam() {
    const queryParams = {
      ...this.route.snapshot.queryParams,
      page: this.currentPage,
    };
    this.router.navigate([`/admin/${this.pageName}`], { queryParams });
    this.pageEmitter.emit(this.currentPage);
  }
}
