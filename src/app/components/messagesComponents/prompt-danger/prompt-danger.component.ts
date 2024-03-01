import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-prompt-danger',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prompt-danger.component.html',
  styles: ``,
})
export class PromptDangerComponent {
  @Input() Deleted!: string;
  @Output() clickedConfirm = new EventEmitter();
  @Input() action!: string;
  ConfirmValve!: string;
  confirmed = false;
  isOpen: string = 'display:none';

  ConfirmDelete() {
    if (this.ConfirmValve === 'CONFIRM') {
      this.clickedConfirm.emit(this.action);
      this.ConfirmValve = '';
      this.isOpen = 'display:none';
    } else {
      const inputConfirm = document.querySelector(
        '.CheckChackChock'
      ) as HTMLElement;
      inputConfirm.classList.add('shake-animation');
      this.ConfirmValve = '';
      setTimeout(() => {
        inputConfirm.classList.remove('shake-animation');
      }, 1000);
    }
  }
}
