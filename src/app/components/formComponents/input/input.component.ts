import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './input.component.html',
  styles: ``,
})
export class InputComponent {
  reqValidation = new FormGroup({
    value: new FormControl('', Validators.maxLength(4)),
  });
  @Input() unit: string = '';
  @Input() lable: string = '';
  @Input() type: string = '';
  @Input() disabled: boolean = false;
  @Input() value: any;
  @Input() isDropdown = false;
  @Input() options: any = [];
  @Output() valueChange = new EventEmitter<string>();

  onValueChange(e: any) {
    this.valueChange.emit(this.value);
    console.log(this.value);
  }
}
