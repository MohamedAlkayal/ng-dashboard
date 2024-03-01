import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-input-textarea',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './input-textarea.component.html',
  styles: ``,
})
export class InputTextareaComponent {
  @Input() control!: FormControl
  @Input() value!: string;
  @Input() lable!: string;
  @Input() placeholder: string = '';
  @Output() messageSent = new EventEmitter();

  sendData() {
    this.messageSent.emit(this.value);
  }
}
