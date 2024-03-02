import { CommonModule, NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, NgClass, CommonModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styles: ``,
})
export class InputComponent {
  reqValidation = new FormGroup({
    value: new FormControl('', Validators.maxLength(4)),

  });
  @Input() ValidInput:any=true
  @Input()control!:FormControl
  @Input() unit: string = '';
  @Input() lable: string = '';
  @Input() type: string = '';
  @Input() disabled: boolean = false;
  @Input() value: any;
  @Input() placeholder: string = '';
  @Input() isDropdown = false;
  @Input() options: any = [];
  @Output() valueChange = new EventEmitter<string>();
  @Output() touched = new EventEmitter<boolean>();
  onValueChange(e: any) {
    this.valueChange.emit(this.value);

  }
  isInputTouched(e: any) {
    this.touched.emit(this.reqValidation.get("value")?.touched);
  }
}
