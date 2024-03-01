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
  ConfirmValve!: string;
  @Input() Deleted!: string;
  @Output() clickedConfirm = new EventEmitter();
  @Input() action!: string;

  ConfirmDelete() {
    if (this.ConfirmValve === 'CONFIRM') {
      this.clickedConfirm.emit(this.action);
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
