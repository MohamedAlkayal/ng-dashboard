import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-inner-lable',
  standalone: true,
  imports: [FormsModule ,CommonModule],
  templateUrl: './input-inner-lable.component.html',
  styles: ``
})
export class InputInnerLableComponent {
  lableTitle:string =""
  selectValue:string = ""

  @Input() inputTitle: any;
  @Output() inputValue = new EventEmitter<string>()
  onValueChange(data: any) {
    console.log(data)
    this.inputValue.emit(data)
  }

}
