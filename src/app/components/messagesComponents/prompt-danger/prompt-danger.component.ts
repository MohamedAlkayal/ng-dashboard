import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-prompt-danger',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './prompt-danger.component.html',
  styles: ``
})
export class PromptDangerComponent {
  isDisplayed:boolean=true
  @Input() Deleted!:number;
  toggleDisplay(){
    this.isDisplayed = !this.isDisplayed
  
  }
  
  @Output() confirmDelete=new EventEmitter();
  confirm(deleted: boolean): void {
    this.confirmDelete.emit(deleted);
  }
 


}
