import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-filter-dropdown',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterOutlet,FormsModule],
  templateUrl: './filter-dropdown.component.html',
  styles: ``
})
export class FilterDropdownComponent {

 @Input() cities:string[]=[]
  city:string[] = []

 @Input() dropdownTitle:any;
 constructor() { }
 selectValue:string = ""
 
@Output() dropdownValue= new EventEmitter<string>()
 onValueChange(data:any){
  console.log(data)
  this.dropdownValue.emit(data)
 }
}
