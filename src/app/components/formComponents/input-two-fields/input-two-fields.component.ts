import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-input-two-fields',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIcon],
  templateUrl: './input-two-fields.component.html',
  styles: ``,
})
export class InputTwoFieldsComponent {
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
      this.options.push({ value: '', subValue: '' });
    }
  }

  addField() {
    this.options.push({ value: '', subValue: '' });
  }
}
