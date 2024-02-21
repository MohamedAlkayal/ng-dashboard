import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-two-fields',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-two-fields.component.html',
  styles: ``
})
export class InputTwoFieldsComponent {
  color: string = "";
  colorValue: string = '';
  @Input() label: string ="" 
  @Input() placeholderColor:string =""
  @Input() placeholderValue:string =""
  @Input() type:string = ""
  @Output() dataSent = new EventEmitter();
  sendData() {
    if(Number(this.colorValue) >= 0){
      this.dataSent.emit({ color: this.color, value: this.colorValue });
    }
  
  }
}
