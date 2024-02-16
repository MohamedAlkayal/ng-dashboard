import { Component, EventEmitter, Output } from '@angular/core';
import {  FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-textarea.component.html',
  styles: ``
})
export class InputTextareaComponent {
  message:string =""
  @Output() messageSent = new EventEmitter();

  sendData() {
    this.messageSent.emit(this.message);
  }
}
