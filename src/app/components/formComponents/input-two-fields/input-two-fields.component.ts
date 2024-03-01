import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-input-two-fields',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIcon,ReactiveFormsModule],
  templateUrl: './input-two-fields.component.html',
  styles: ``,
})
export class InputTwoFieldsComponent {
  @Input() control_value!: FormControl
  @Input() control_key!: FormControl
  @Input() options: any = [];
  @Input() label: string = '';
  @Input() mainPlaceholder: string = '';
  @Input() subPlaceholder: string = '';
  @Output() valuesEmmiter = new EventEmitter();

  emmitData() {
    this.valuesEmmiter.emit('test');
  }
  ngOnInit() {
    if (this.options.length === 0) {
      this.options.push({ 
        control_value: new FormControl(''),
        control_key: new FormControl(''),});
    }
  }

  addField() {
    this.options.push({ 
      control_value: new FormControl(''),
      control_key: new FormControl(''),});
  };
  }

