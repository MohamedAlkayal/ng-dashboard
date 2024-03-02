import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { PaginationComponent } from '../pagination/pagination.component';
import { EventEmitter } from '@angular/core';
import { PromptDangerComponent } from '../../messagesComponents/prompt-danger/prompt-danger.component';
import { AdminUserServices } from '../../../services/admin-user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';
import { AdminProductService } from '../../../services/admin-product.service';

@Component({
  selector: 'app-table-controls',
  standalone: true,
  imports: [
    CommonModule,
    MatIcon,
    PaginationComponent,
    PromptDangerComponent,
    RouterLink,
  ],
  providers: [AdminUserServices, AdminProductService],
  templateUrl: './table-controls.component.html',
})
export class TableControlsComponent {
  @Input() pageName!: string;
  @Input() resualtsCount: number = 0;
  @Input() currentPage!: number;
  @Input() pagesCount!: number;
  @Input() itemsCount!: number;
  @Input() selectedItems: string[] = [];
  @Input() dangerBtn!: string;
  @Input() warningBtn!: string;
  @Output() pageEmitter = new EventEmitter();
  @Output() renderEmitter = new EventEmitter();

  constructor(
    private usersService: AdminUserServices,
    private produuctsService: AdminProductService,
    private toaster: ToastrService,
    private router: Router
  ) {}
  handleConfirming(data: Event) {
    if (this.pageName === 'products') {
      this.produuctsService.deleteProducts(this.selectedItems).subscribe({
        next: () => {
          this.renderEmitter.emit('render');
          this.toaster.success('deleted');
        },
        error: (data) => {
          console.log(data);
          this.toaster.error('deletion failed');
        },
      });
    } else {
      this.usersService.deleteUsers(this.selectedItems).subscribe({
        next: (data) => {
          console.log(data);
          this.renderEmitter.emit('render');
          this.toaster.success('deleted');
        },
        error: (data) => {
          console.log(data);
          this.toaster.error('deletion failed');
        },
      });
    }
  }
}
