import { Component, Input } from '@angular/core';
import { InputDropdownComponent } from '../input-dropdown/input-dropdown.component';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { InputTextComponent } from '../input-text/input-text.component';

@Component({
  selector: 'app-input-keywords',
  standalone: true,
  imports: [InputDropdownComponent, CommonModule, MatIcon, InputTextComponent],
  templateUrl: './input-keywords.component.html',
  styles: './input-keyword.component.css'
})
export class InputKeywordsComponent {
  list: string[] = []
  inputValue: string = ""
  lable:string=""
  onValueChange(e: any) {
    this.inputValue = e
    this.inputValue=this.inputValue.trimStart().trimEnd().toLowerCase();
    if(this.inputValue.length <= 20&&this.inputValue.length>0){
      this.list.push(this.inputValue);
    }
  }
  deletElement(e:any){
    let index=this.list.indexOf(e)
    this.list.splice(index,1)
  }
}
