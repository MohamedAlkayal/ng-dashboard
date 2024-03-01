import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-filter-dropdown',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, RouterOutlet, FormsModule],
  templateUrl: './filter-dropdown.component.html',
  styles: ``,
})
export class FilterDropdownComponent {
  @Input()control!:FormControl
  @Input() id!: string;
  @Input() items: string[] = [];
  item: string[] = [];
  @Input() lable: any;
  constructor() {}
  selectValue: string = '';

  @Output() dropdownEmmiter = new EventEmitter<string>();
  onValueChange(data: any) {
    this.dropdownEmmiter.emit(data);
  }
}
