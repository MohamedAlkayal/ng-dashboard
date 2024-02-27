import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  input,
} from '@angular/core';
import { InputComponent } from '../formComponents/input/input.component';
import { InputKeywordsComponent } from '../formComponents/input-keywords/input-keywords.component';
import { InputTextareaComponent } from '../formComponents/input-textarea/input-textarea.component';
import { CardCtaComponent } from '../cardComponents/card-cta/card-cta.component';
import { CardPromptComponent } from '../cardComponents/card-prompt/card-prompt.component';

@Component({
  selector: 'app-one-category',
  standalone: true,
  imports: [
    InputComponent,
    InputKeywordsComponent,
    InputTextareaComponent,
    CardCtaComponent,
    CardPromptComponent,
  ],
  templateUrl: './one-category.component.html',
  styles: '',
})
export class OneCategoryComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.isDisabled = true;
    if (this.selectedCategory) {
      this.currentFieldInfo = {};
      for (const key in this.selectedCategory) {
        this.currentFieldInfo[key] = this.selectedCategory[key];
      }
    }
  }
  @Input() selectedCategory!: any;
  isDisabled: boolean = true;
  currentFieldInfo: any;
  cardInfo = {
    data: 'Are you sure you want to update the shown category with the edited data? This will affect all the corresponding products and some products will have its data changed as an after effect of this change. if you are sure please revise the from and click confirm',
    color: 'success',
    text: 'Confirm',
  };
  onCategoryNameChange(event: string) {
    this.isDisabled = false;
    this.currentFieldInfo.name = event;
  }
  onTextAreaChange(event: string) {
    this.isDisabled = false;
    this.currentFieldInfo.description = event;
  }
  onKeyWordChange(event: string) {
    this.isDisabled = false;
    console.log(event);
    this.currentFieldInfo.subCategories = [...event];
  }
  clickedCancel() {
    this.isDisabled = true;
    for (const key in this.selectedCategory) {
      this.currentFieldInfo[key] = this.selectedCategory[key];
    }
  }
}
