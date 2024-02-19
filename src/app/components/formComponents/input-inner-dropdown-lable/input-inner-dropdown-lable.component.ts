import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-inner-dropdown-lable',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-inner-dropdown-lable.component.html',
  styleUrl: './input-inner-dropdown-lable.component.css'
})
export class InputInnerDropdownLableComponent {
  @Input() dropdownItems!: string[] 
  @Input() dropdownTitle: any;
  selectValue: string = ""

  @Output() inputValue = new EventEmitter<string>()
  onValueChange(data: any) {
    console.log(data)
    this.inputValue.emit(data)
  }
}
