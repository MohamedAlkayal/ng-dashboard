import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

@Component({
  selector: 'app-card-cta',
  standalone: true,
  imports: [],
  templateUrl: './card-cta.component.html',
  styles: ``,
})
export class CardCtaComponent implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    if (this.config.color !== 'light') {
      this.addBsToggleAttribute();
    }
  }

  @Input() config!: {
    data: string;
    text: string;
    color: string;
  };
  addBsToggleAttribute() {
    const buttonElement = this.elementRef.nativeElement.querySelector('button');
    if (buttonElement) {
      this.renderer.setAttribute(buttonElement, 'data-bs-toggle', 'modal');
    }
  }
  @Output() clicked = new EventEmitter();
  handleClick(event: any) {
    this.clicked.emit();
  }
}
