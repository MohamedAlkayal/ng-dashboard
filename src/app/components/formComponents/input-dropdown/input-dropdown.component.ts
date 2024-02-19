import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'app-input-dropdown',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './input-dropdown.component.html',
  styles: ``
})
export class InputDropdownComponent {

  @Input() dropdownItems:string[]=[]
  items:string[] = []

 @Input() dropdownTitle:any;
 selectValue:string = ""
 
@Output() dropdownValue= new EventEmitter<string>()
 onValueChange(data:any){
  console.log(data)
  this.dropdownValue.emit(data)
 }
}
