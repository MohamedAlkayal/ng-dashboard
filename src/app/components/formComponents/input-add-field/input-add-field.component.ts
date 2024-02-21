import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTwoFieldsComponent } from '../input-two-fields/input-two-fields.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-input-add-field',
  standalone: true,
  imports: [CommonModule,InputTwoFieldsComponent,MatIcon],
  templateUrl: './input-add-field.component.html',
  styles: ``
})
export class InputAddFieldComponent {
  items:number[] =[]
counter:number = 0
  clickToAppend(){
    if(this.items.length<5){
      this.items.push(++this.counter)
      console.log(this.items)
    }
    }
}
