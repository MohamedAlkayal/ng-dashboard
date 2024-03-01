import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-filter-text',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './filter-text.component.html',
  styles: ``,
})
export class FilterTextComponent {
  @Input() control!:FormControl
  @Input() lable: string = '';
  @Input() type: string = '';
  // @Input() formControlName!: string;
  // @Output() value = new EventEmitter<string>();
  // inptValue: any;

  // onValueChange(data: any) {
  //   this.value.emit(data);
  // }
}
