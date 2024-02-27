import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-textarea.component.html',
  styles: ``,
})
export class InputTextareaComponent {
  @Input() value!: string;
  @Input() lable!: string;
  @Output() messageSent = new EventEmitter();

  sendData() {
    this.messageSent.emit(this.value);
  }
}
