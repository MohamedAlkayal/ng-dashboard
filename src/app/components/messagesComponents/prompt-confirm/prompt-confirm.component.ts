import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prompt-confirm',
  standalone: true,
  imports: [],
  templateUrl: './prompt-confirm.component.html',
  styles: ``
})
export class PromptConfirmComponent {
@Output() ConfirmUpdated = new EventEmitter();
Confirm(){
  // this.ConfirmUpdated.emit()
  console.log("yeeeessss");
  
}
}
