import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-failed',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './failed.component.html',
  styles: ``
})
export class FailedComponent {
  passwordValue:string = ""
  emailValue:string = ""
  getValus(){
    console.log(this.passwordValue)
    console.log(this.emailValue)
    this.passwordValue =""
    this.emailValue = ""
  }
}
