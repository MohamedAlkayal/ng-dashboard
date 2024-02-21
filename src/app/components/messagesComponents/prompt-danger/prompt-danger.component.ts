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
  isDisplayed:boolean=true
  ConfirmValve!:string
  @Input() Deleted!:number;
  @Output() confirmDelete=new EventEmitter();
  toggleDisplay(){
    this.isDisplayed = !this.isDisplayed
    const displayLayer =document.querySelector('.layer') as HTMLElement
  displayLayer.style.display = this.isDisplayed ? "flex" : "none";
console.log(this.isDisplayed);
  
}
  
  confirm(deleted: boolean): void {
    if(deleted && this.ConfirmValve=="CONFIRM"){
      console.log(deleted,"welcome");    
    }
    else if(deleted && this.ConfirmValve=="CONFIRM")
    {
      console.log(deleted ,"sorry...");
      this.toggleDisplay();
    }
    this.confirmDelete.emit(deleted);
  }
  onClickOutside(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const promptElement = document.querySelector('.prompt') as HTMLElement;
    if (!promptElement.contains(targetElement)) {
      this.toggleDisplay();
      console.log( "Clicked outside!");
      
    }else{
      console.log("inside");
      
    }
  }

}
