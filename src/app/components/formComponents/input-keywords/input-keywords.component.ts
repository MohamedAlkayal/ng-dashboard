import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-keywords',
  standalone: true,
  imports: [CommonModule, MatIcon, InputComponent, FormsModule],
  templateUrl: './input-keywords.component.html',
})
export class InputKeywordsComponent {
  @Input() keywords: string[] = [];
  @Input() label: string = 'keywords';
  @Input() placeholder: string = '';
  @Output() modified = new EventEmitter();

  value: string = '';
  addKeyword(e: any) {
    if (e.key === 'Enter') {
      this.keywords.push(this.value);
      this.value = '';
      this.modified.emit(this.keywords);
    }
  }

  deletElement(e: any) {
    console.log(e);
    let index = this.keywords.indexOf(e);
    this.keywords.splice(index, 1);
    this.modified.emit(this.keywords);
  }
}
