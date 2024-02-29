import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-prompt-confirm',
  standalone: true,
  imports: [],
  templateUrl: './prompt-confirm.component.html',
  styles: ``,
})
export class PromptConfirmComponent {
  @Output() ConfirmUpdated = new EventEmitter();
  @Input() promptText: string = '';
  
  Confirm() {
    this.ConfirmUpdated.emit();
  }
  onSubmit(e:any){
    console.log(e)
  }
}
