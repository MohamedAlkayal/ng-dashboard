import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-card-cta',
  standalone: true,
  imports: [],
  templateUrl: './card-cta.component.html',
  styles: ``
})
export class CardCtaComponent implements OnInit {
ngOnInit(): void {
// console.log(this.child);
}
@Input() config!:{
  data:string,
  text: string,
  color:string
}

}
