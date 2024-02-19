import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card-alert',
  standalone: true,
  imports: [],
  templateUrl: './card-alert.component.html',
  styles: ``
})
export class CardAlertComponent {
  @Input() config!:{
    title: string,
    data:string,
    text:string,
    borderColor:string,
    BG:string
  }

}
