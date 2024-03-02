import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-prompt',
  standalone: true,
  imports: [],
  templateUrl: './card-prompt.component.html',
  styles: ``,
})
export class CardPromptComponent {
  @Input() isDisabled!: boolean;
  @Input() config!: {
    data: string;
    color: string;
    text: string;
  };
  @Output() cancel = new EventEmitter();
  clickedCancel(event: any) {
    this.cancel.emit(true);
  }

  @Output() ConfirmUpdated = new EventEmitter();
  @Input() userData: {} = {};

  getUserData(e: any) {
    console.log(e);
    this.userData = e;
  }

  Confirm() {
    this.ConfirmUpdated.emit();
    console.log('yeeeessss');
    console.log(this.userData);
  }
}
