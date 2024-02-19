import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-prompt',
  standalone: true,
  imports: [],
  templateUrl: './card-prompt.component.html',
  styles: ``
})
export class CardPromptComponent {
  @Input() config!:{
    data:string,
    color:string,
    text:string
  }

}
