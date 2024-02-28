import { Component } from '@angular/core';
import { ListComponent } from '../../../components/list/list.component';
import { AdminVouchersService } from '../../../services/admin-vouchers.service';
import { OneVoucherComponent } from '../one-voucher/one-voucher.component';
import { AdminLogsService } from '../../../services/admin-logs.service';
import { PromptConfirmComponent } from '../../../components/messagesComponents/prompt-confirm/prompt-confirm.component';
import { AdminProductService } from '../../../services/admin-product.service';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-vouchers',
  standalone: true,
  providers: [AdminVouchersService],
  imports: [ListComponent, OneVoucherComponent, PromptConfirmComponent],
  templateUrl: './vouchers.component.html',
  styles: '',
})
export class VouchersComponent {
  constructor(private vouchers: AdminVouchersService) {}
  vouchersFromDb: any[] = [];
  selectedVoucher: any;
  newVoucher = false;

  ngOnInit(): void {
    this.vouchers.getAll().subscribe({
      next: (response: any) => {
        this.vouchersFromDb = response;
        this.selectedVoucher = this.vouchersFromDb[0];
      },
      error(x) {
        console.log(x);
      },
    });
  }
  handleSelectedComponent(args: any) {
    this.newVoucher = false;
    this.selectedVoucher = this.vouchersFromDb.filter((e) => e._id === args)[0];
  }
  handleNewVoucher(args: any) {
    this.newVoucher = true;
    this.selectedVoucher = {
      code: args,
      type: 'flat',
    };
  }
  handleVoucherChange() {
    this.vouchers.getAll().subscribe({
      next: (response: any) => {
        this.vouchersFromDb = response;
        this.selectedVoucher = this.vouchersFromDb[0];
      },
      error(x) {
        console.log(x);
      },
    });
  }
}
