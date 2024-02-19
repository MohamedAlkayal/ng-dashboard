import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [FormsModule,NgClass],
  templateUrl: './input-text.component.html',
  styles: ``
})
export class InputTextComponent {
  reqValidation = new FormGroup({
    value: new FormControl("", Validators.maxLength(4)),
  })
  @Input() lable: string = '';
  @Input() textType: string = '';
  @Input() disabed:boolean=false;
  @Output() value = new EventEmitter<string>();
  inptValue:any ;
  onValueChange(data:any){
    console.log(data)
    this.value.emit(data)
  }
}
