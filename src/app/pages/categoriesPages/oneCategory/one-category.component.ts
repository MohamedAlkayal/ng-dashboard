import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  input,
} from '@angular/core';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputKeywordsComponent } from '../../../components/formComponents/input-keywords/input-keywords.component';
import { InputTextareaComponent } from '../../../components/formComponents/input-textarea/input-textarea.component';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { PromptConfirmComponent } from '../../../components/messagesComponents/prompt-confirm/prompt-confirm.component';
import { AdminCategoriesService } from '../../../services/admin-categories.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-one-category',
  standalone: true,
  imports: [
    InputComponent,
    InputKeywordsComponent,
    InputTextareaComponent,
    CardPromptComponent,
    PromptConfirmComponent,
    ReactiveFormsModule,
  ],
  providers: [AdminCategoriesService],
  templateUrl: './one-category.component.html',
})
export class OneCategoryComponent implements OnChanges {
  @Input() selectedCategory!: any;
  @Input() newCategory: boolean = true;
  @Output() changedCategory = new EventEmitter();
  isDisabled: boolean = true;
  currentFieldInfo: any = {};
  promptText: string = '';
  cardInfo = {
    data: `${
      this.newCategory
        ? `You Are Creating A category Called ${this.currentFieldInfo.name} `
        : 'Are you sure you want to update the shown category with the edited data? This will affect all the corresponding products and some products will have its data changed as an after effect of this change. if you are sure please revise the from and click confirm'
    }`,
    color: 'success',
    text: `${this.newCategory ? 'Create' : 'Update'}`,
  };
  formGroup = new FormGroup({
    catName: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  constructor(private category: AdminCategoriesService) {
    this.formGroup.valueChanges.subscribe(() => {
      if (this.formGroup.dirty) {
        // Do something when any input is touched
        this.isDisabled = false;
        this.currentFieldInfo.name = this.formGroup.get('catName')?.value;
        this.currentFieldInfo.description =
          this.formGroup.get('description')?.value;
      }
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isDisabled = true;
    if (this.selectedCategory) {
      this.currentFieldInfo = {};
      this.formGroup.get('catName')?.patchValue(this.selectedCategory.name);
      this.formGroup
        .get('description')
        ?.patchValue(this.selectedCategory.description);
      for (const key in this.selectedCategory) {
        if (key === 'subCategories') {
          this.currentFieldInfo[key] = [...this.selectedCategory[key]];
        } else {
          this.currentFieldInfo[key] = this.selectedCategory[key];
        }
      }
      this.promptText = this.newCategory
        ? `You are about to create a new category name ${this.currentFieldInfo.name}`
        : `You are about to edit the category named ${this.currentFieldInfo.name}`;
    }
    this.cardInfo = {
      data: `${
        this.newCategory
          ? 'Before creating a new category, please take a moment to consider the following: Creating a new category will introduce a new classification within your system. This action may impact existing processes and workflows. Ensure that the category name, description, and any associated subcategories are accurately represented before proceeding. Once you are ready to proceed, click the "Create" button below to finalize the creation of the new category. Thank you for your attention to detail and commitment to maintaining data accuracy. '
          : 'Before proceeding, please consider the following: Updating the displayed category with the edited data will have far-reaching consequences. This action will impact all associated products, potentially altering their data as a result. Please take a moment to review the information provided in the form. Once you are confident in your changes, proceed by clicking the "Update" button below. Thank you for your attention to detail.'
      }`,
      color: 'success',
      text: `${this.newCategory ? 'Create' : 'Update'}`,
    };
  }

  onKeyWordChange(event: string) {
    this.currentFieldInfo.subCategories = [...event];
    this.isDisabled = false;
  }
  clickedCancel() {
    this.isDisabled = true;
    this.formGroup.get('catName')?.patchValue(this.selectedCategory.name);
    this.formGroup
      .get('description')
      ?.patchValue(this.selectedCategory.description);
    for (const key in this.selectedCategory) {
      if (key === 'subCategories') {
        this.currentFieldInfo[key] = [...this.selectedCategory[key]];
      }
    }
  }
  handlePromptConfirm() {
    console.log('handledPrompt');
    if (!this.newCategory) {
      this.category
        .edit(this.currentFieldInfo.name, {
          description: this.currentFieldInfo.description,
          subCategories: this.currentFieldInfo.subCategories,
        })
        .subscribe({
          next: (x) => {
            console.log(x);
            this.changedCategory.emit();
          },
          error(x) {
            console.log(x);
          },
        });
    } else {
      this.category
        .create(
          this.currentFieldInfo.name,
          this.currentFieldInfo.description,
          this.currentFieldInfo.subCategories
        )
        .subscribe({
          next: (x) => {
            console.log(x);
            this.changedCategory.emit();
          },
          error(x) {
            console.log(x);
          },
        });
    }
    this.changedCategory.emit();
  }
}
