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
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-one-admin',
  standalone: true,
  imports: [
    InputComponent,
    CardPromptComponent,
    PromptConfirmComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
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
  constructor(private admin: AdminServices, private toaster: ToastrService) {
    this.formGroup.valueChanges.subscribe(() => {
      if (this.formGroup.dirty) {
        this.isDisabled = false;

        this.currentFieldInfo.authorities.admin =
          this.formGroup.get('admins')?.value;

        this.currentFieldInfo.authorities.orders =
          this.formGroup.get('orders')?.value;

        this.currentFieldInfo.authorities.products =
          this.formGroup.get('products')?.value;

        this.currentFieldInfo.authorities.categories =
          this.formGroup.get('categories')?.value;

        this.currentFieldInfo.authorities.users =
          this.formGroup.get('users')?.value;

        this.currentFieldInfo.authorities.vouchers =
          this.formGroup.get('vouchers')?.value;
      }
    });
  }

  formGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    createdBy: new FormControl({ value: '', disabled: true }, [
      Validators.required,
    ]),
    admins: new FormControl('', [Validators.required]),
    orders: new FormControl('', [Validators.required]),
    products: new FormControl('', [Validators.required]),
    users: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    vouchers: new FormControl('', [Validators.required]),
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.formGroup.get('username')?.patchValue(this.selectedAdmin.username);
    this.formGroup.get('createdBy')?.patchValue(this.selectedAdmin.createdBy);
    this.formGroup
      .get('admins')
      ?.patchValue(this.selectedAdmin.authorities.admin);
    console.log(this.selectedAdmin.authorities.admin);
    this.formGroup
      .get('orders')
      ?.patchValue(this.selectedAdmin.authorities.orders);
    this.formGroup
      .get('products')
      ?.patchValue(this.selectedAdmin.authorities.products);
    this.formGroup
      .get('categories')
      ?.patchValue(this.selectedAdmin.authorities.categories);
    this.formGroup
      .get('users')
      ?.patchValue(this.selectedAdmin.authorities.users);
    this.formGroup
      .get('vouchers')
      ?.patchValue(this.selectedAdmin.authorities.vouchers);

    this.isDisabled = true;
    if (this.selectedAdmin) {
      this.currentFieldInfo = {};
      for (const key in this.selectedAdmin) {
        if (key === 'authorities') {
          this.currentFieldInfo[key] = { ...this.selectedAdmin[key] };
        } else this.currentFieldInfo[key] = this.selectedAdmin[key];
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
    this.formGroup.get('username')?.patchValue(this.selectedAdmin.username);
    this.formGroup.get('createdBy')?.patchValue(this.selectedAdmin.createdBy);
    this.formGroup.get('password')?.patchValue('');
    this.formGroup
      .get('admins')
      ?.patchValue(this.selectedAdmin.authorities.admin);
    this.formGroup
      .get('orders')
      ?.patchValue(this.selectedAdmin.authorities.orders);
    this.formGroup
      .get('products')
      ?.patchValue(this.selectedAdmin.authorities.products);
    this.formGroup
      .get('categories')
      ?.patchValue(this.selectedAdmin.authorities.categories);
    this.formGroup
      .get('users')
      ?.patchValue(this.selectedAdmin.authorities.users);
    this.formGroup
      .get('vouchers')
      ?.patchValue(this.selectedAdmin.authorities.vouchers);
    this.isDisabled = true;
  }
  handlePromptConfirm() {
    if (!this.newAdmin) {
      this.admin
        .update(this.selectedAdmin._id, this.currentFieldInfo.authorities)
        .subscribe({
          next: (data: any) => {
            console.log(data);
            this.toaster.success(`${this.selectedAdmin.username} is updated`);
          },
          error: (err) => {
            console.log(err);
            this.toaster.error(
              `${this.selectedAdmin.username} updating failed`
            );
          },
        });
    } else {
      const adminBody = {
        username: this.formGroup.get('username')?.value,
        password: this.formGroup.get('password')?.value,
        authorities: {
          admin: Boolean(this.formGroup.get('admins')?.value),
          categories: Boolean(this.formGroup.get('categories')?.value),
          orders: Boolean(this.formGroup.get('orders')?.value),
          products: Boolean(this.formGroup.get('products')?.value),
          users: Boolean(this.formGroup.get('users')?.value),
          vouchers: Boolean(this.formGroup.get('vouchers')?.value),
        },
      };
      this.admin
        .create(adminBody.username, adminBody.password, adminBody.authorities)
        .subscribe({
          next: (x) => {
            console.log(x);
            this.changedAdmin.emit();
            this.toaster.success(`${this.selectedAdmin.username} created`);
          },
          error: (x) => {
            console.log(x);
            this.toaster.error(`admin creation failed`);
          },
        });
    }
    this.changedAdmin.emit();
  }
}
