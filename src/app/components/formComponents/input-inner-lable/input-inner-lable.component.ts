import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-input-inner-lable',
  standalone: true,
  imports: [FormsModule, CommonModule, MatIcon,ReactiveFormsModule],
  templateUrl: './input-inner-lable.component.html',
  styles: ``,
})
export class InputInnerLableComponent {

  @Input() control!:FormControl;
  @Input() values!: any;
  @Input() lable: any;
  @Input() disabled: boolean = false;
  @Output() inputValue = new EventEmitter<string>();
  @Output() dropdownEmmiter = new EventEmitter<string>();
  @Output() isInnerInputToched = new EventEmitter();

  inputToched:boolean=false;
  ngOnInit() {}
  toched(e:any){
    this.isInnerInputToched.emit(this.inputToched)
  }
  onOptionSelect(data: any) {
    this.dropdownEmmiter.emit(data);
  }

  onValueChange(data: any) {
    this.inputValue.emit(this.values);
  }
}
