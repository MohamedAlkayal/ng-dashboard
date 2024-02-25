import { Component, Input } from '@angular/core';
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

  value: string = '';

  addKeyword(e: any) {
    if (e.key === 'Enter') {
      this.keywords.push(this.value);
      this.value = '';
    }
  }

  deletElement(e: any) {
    console.log(e);
    let index = this.keywords.indexOf(e);
    this.keywords.splice(index, 1);
  }
}
