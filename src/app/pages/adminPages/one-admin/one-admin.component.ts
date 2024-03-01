import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { AdminServices } from '../../../services/admin.service';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { PromptConfirmComponent } from '../../../components/messagesComponents/prompt-confirm/prompt-confirm.component';

@Component({
  selector: 'app-one-admin',
  standalone: true,
  imports: [InputComponent, CardPromptComponent, PromptConfirmComponent],
  providers: [AdminServices],
  templateUrl: './one-admin.component.html',
  styles: '',
})
export class OneAdminComponent {
  @Input() selectedAdmin!: any;
  @Input() newAdmin: boolean = true;
  @Output() changedAdmin = new EventEmitter();
  isDisabled: boolean = true;
  currentFieldInfo: any;
  cardInfo = {
    data: `${
      this.newAdmin
        ? ''
        : 'Are you sure you want to update the shown Voucher with the edited data? This will affect all the corresponding products and some products will have its data changed as an after effect of this change. if you are sure please revise the form and click "confirm"'
    }`,
    color: 'success',
    text: `${this.newAdmin ? 'Create' : 'Update'}`,
  };
  promptText: string = '';
  constructor(private admin: AdminServices) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.isDisabled = true;
    if (this.selectedAdmin) {
      this.currentFieldInfo = {};
      for (const key in this.selectedAdmin) {
        this.currentFieldInfo[key] = this.selectedAdmin[key];
      }
      this.promptText = this.newAdmin
        ? `You are about to create a new admin with username ${this.currentFieldInfo.username}`
        : `You are about to edit the admin with username ${this.currentFieldInfo.username}`;
    }
    this.cardInfo = {
      data: `${
        this.newAdmin
          ? 'Before creating a new admin, please take a moment to consider the following: Creating a new admin will introduce a new classification within your system. This action may impact existing processes and workflows. Ensure that the admin name, description, and any associated subcategories are accurately represented before proceeding. Once you are ready to proceed, click the "Create" button below to finalize the creation of the new admin. Thank you for your attention to detail and commitment to maintaining data accuracy. '
          : 'Before proceeding, please consider the following: Updating the displayed admin with the edited data will have far-reaching consequences. This action will impact all associated products, potentially altering their data as a result. Please take a moment to review the information provided in the form. Once you are confident in your changes, proceed by clicking the "Update" button below. Thank you for your attention to detail.'
      }`,
      color: 'success',
      text: `${this.newAdmin ? 'Create' : 'Update'}`,
    };
    const date = this.currentFieldInfo.expiryDate
      ? new Date(this.currentFieldInfo.expiryDate)
      : new Date();
    this.currentFieldInfo.expiryDate = date.toISOString().substring(0, 10);
  }
  onAdminAttrChange(event: string, key: string) {
    this.isDisabled = false;
    this.currentFieldInfo[key] = event;
  }
  clickedCancel() {
    this.isDisabled = true;
    for (const key in this.selectedAdmin) {
      this.currentFieldInfo[key] = this.selectedAdmin[key];
    }
  }
  handlePromptConfirm() {
    // if (!this.newAdmin) {
    //   this.admin
    //     .update(
    //       this.currentFieldInfo._id,
    //       this.currentFieldInfo.discount,
    //       this.currentFieldInfo.type,
    //       this.currentFieldInfo.expiryDate,
    //       this.currentFieldInfo.maxUsage
    //     )
    //     .subscribe({
    //       next: (x) => {
    //         console.log(x);
    //         this.changedAdmin.emit();
    //       },
    //       error(x) {
    //         console.log(x);
    //       },
    //     });
    // } else {
    //   this.admin
    //     .create(
    //       this.currentFieldInfo.code,
    //       this.currentFieldInfo.discount,
    //       this.currentFieldInfo.type,
    //       this.currentFieldInfo.expiryDate,
    //       this.currentFieldInfo.maxUsage
    //     )
    //     .subscribe({
    //       next: (x) => {
    //         console.log(x);
    //         this.changedAdmin.emit();
    //       },
    //       error(x) {
    //         console.log(x);
    //       },
    //     });
    // }
  }
}
