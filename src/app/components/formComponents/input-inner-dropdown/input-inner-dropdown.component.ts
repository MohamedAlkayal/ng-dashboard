import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-inner-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],

  templateUrl: './input-inner-dropdown.component.html',
  styleUrl: './input-inner-dropdown.component.css',
})
export class InputInnerDropdownComponent {
  @Input() control!: FormControl;
  @Input() lable!: string;
  @Input() innerLable!: string;
  @Input() options!: string[];
  @Input() selectedValue!: string;
  @Input() value: any;
  @Output() selectedEmitter = new EventEmitter();

  ngOnInit() {
    // console.log(this.value);
  }

  getSelected(gov: any) {
    this.selectedEmitter.emit(gov);
  }
}
