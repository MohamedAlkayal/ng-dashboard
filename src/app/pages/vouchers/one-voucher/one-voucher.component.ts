import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { PromptConfirmComponent } from '../../../components/messagesComponents/prompt-confirm/prompt-confirm.component';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { AdminVouchersService } from '../../../services/admin-vouchers.service';

@Component({
  selector: 'app-one-voucher',
  standalone: true,
  imports: [InputComponent, PromptConfirmComponent, CardPromptComponent],
  providers: [AdminVouchersService],
  templateUrl: './one-voucher.component.html',
  styles: '',
})
export class OneVoucherComponent {
//   @Input() selectedVoucher!: any;
//   @Input() newVoucher: boolean = true;
//   @Output() changedVoucher = new EventEmitter();
//   isDisabled: boolean = true;
//   currentFieldInfo: any;
//   cardInfo = {
//     data: `${
//       this.newVoucher
//         ? ''
//         : 'Are you sure you want to update the shown Voucher with the edited data? This will affect all the corresponding products and some products will have its data changed as an after effect of this change. if you are sure please revise the form and click "confirm"'
//     }`,
//     color: 'success',
//     text: `${this.newVoucher ? 'Create' : 'Update'}`,
//   };
//   promptText: string = '';
//   constructor(private voucher: AdminVouchersService) {}
//   ngOnChanges(changes: SimpleChanges): void {
//     this.isDisabled = true;
//     if (this.selectedVoucher) {
//       this.currentFieldInfo = {};
//       for (const key in this.selectedVoucher) {
//         this.currentFieldInfo[key] = this.selectedVoucher[key];
//       }
//       this.promptText = this.newVoucher
//         ? `You are about to create a new voucher with code ${this.currentFieldInfo.code}`
//         : `You are about to edit the voucher coded ${this.currentFieldInfo.code}`;
//     }
//     this.cardInfo = {
//       data: `${
//         this.newVoucher
//           ? 'Before creating a new Voucher, please take a moment to consider the following: Creating a new voucher will introduce a new classification within your system. This action may impact existing processes and workflows. Ensure that the voucher name, description, and any associated subcategories are accurately represented before proceeding. Once you are ready to proceed, click the "Create" button below to finalize the creation of the new voucher. Thank you for your attention to detail and commitment to maintaining data accuracy. '
//           : 'Before proceeding, please consider the following: Updating the displayed voucher with the edited data will have far-reaching consequences. This action will impact all associated products, potentially altering their data as a result. Please take a moment to review the information provided in the form. Once you are confident in your changes, proceed by clicking the "Update" button below. Thank you for your attention to detail.'
//       }`,
//       color: 'success',
//       text: `${this.newVoucher ? 'Create' : 'Update'}`,
//     };
//     const date = this.currentFieldInfo.expiryDate
//       ? new Date(this.currentFieldInfo.expiryDate)
//       : new Date();
//     this.currentFieldInfo.expiryDate = date.toISOString().substring(0, 10);
//   }
//   onVoucherAttrChange(event: string, key: string) {
//     this.isDisabled = false;
//     this.currentFieldInfo[key] = event;
//   }
//   clickedCancel() {
//     this.isDisabled = true;
//     for (const key in this.selectedVoucher) {
//       if (key === 'subCategories') {
//         this.currentFieldInfo[key] = [...this.selectedVoucher[key]];
//       } else {
//         this.currentFieldInfo[key] = this.selectedVoucher[key];
//       }
//     }
//   }
//   handlePromptConfirm() {
//     if (!this.newVoucher) {
//       this.voucher
//         .update(
//           this.currentFieldInfo._id,
//           this.currentFieldInfo.discount,
//           this.currentFieldInfo.type,
//           this.currentFieldInfo.expiryDate,
//           this.currentFieldInfo.maxUsage
//         )
//         .subscribe({
//           next: (x) => {
//             console.log(x);
//             this.changedVoucher.emit();
//           },
//           error(x) {
//             console.log(x);
//           },
//         });
//     } else {
//       this.voucher
//         .create(
//           this.currentFieldInfo.code,
//           this.currentFieldInfo.discount,
//           this.currentFieldInfo.type,
//           this.currentFieldInfo.expiryDate,
//           this.currentFieldInfo.maxUsage
//         )
//         .subscribe({
//           next: (x) => {
//             console.log(x);
//             this.changedVoucher.emit();
//           },
//           error(x) {
//             console.log(x);
//           },
//         });
//     }
//   }
}
