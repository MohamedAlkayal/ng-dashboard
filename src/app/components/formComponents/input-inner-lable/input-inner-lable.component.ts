import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-input-inner-lable',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIcon,ReactiveFormsModule],
  templateUrl: './input-inner-lable.component.html',
  styles: ``,
})
export class InputInnerLableComponent {
  @Input()control!:FormControl
  @Input() value!: any;
  @Input() lable!: string;
  @Input() innerLable!: string;
  @Input() type!: string;
  @Input() disabled: boolean = false;

  ngOnInit() {}
}
