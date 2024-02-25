 import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-prompt-danger',
  standalone: true,
  imports: [CommonModule,FormsModule ],
  templateUrl: './prompt-danger.component.html',
  styles: ``
})
export class PromptDangerComponent {
  
  ConfirmValve!:string
  @Input() Deleted!:number;
  @Output() confirmDelete=new EventEmitter();

  

  
  ConfirmDelete() {
    if(this.ConfirmValve==="CONFIRM"){
      console.log("welcome","hi");    
    }
    else 
  {

    const inputConfirm=document.querySelector('.CheckChackChock') as HTMLElement
    inputConfirm.classList.add('shake-animation');
    this.ConfirmValve=""
    setTimeout(() => {
      inputConfirm.classList.remove('shake-animation');
    }, 1000); 
  } 
  }
  
}
