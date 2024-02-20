import { NgStyle } from '@angular/common';
import {
  Component,
  NgModule,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-range',
  standalone: true,
  imports: [NgStyle, FormsModule],
  templateUrl: './filter-range.component.html',
  styleUrl: './filter-range.component.css',
})
export class FilterRangeComponent implements OnInit {
  @Input() allMax!: number;
  @Input() allMin!: number;
  @Input() lable!: string;
  @Input() myStep!: number;
  @Output() values = new EventEmitter();

  step!: number;
  slider1!: number;
  slider2!: number;

  left!: string;
  right!: string;

  ngOnInit(): void {
    this.slider1 = Math.floor(this.allMin + (this.allMax - this.allMin) * 0.2);
    this.slider2 = Math.ceil(this.allMax - (this.allMax - this.allMin) * 0.2);
    this.step = this.myStep || Math.ceil((this.allMax - this.allMin) * 0.01);
    this.updateValues();
  }

  updateValues() {
    this.left =
      this.slider1 < this.slider2
        ? ((this.slider1 - this.allMin) / (this.allMax - this.allMin)) * 100 +
          '%'
        : ((this.slider2 - this.allMin) / (this.allMax - this.allMin)) * 100 +
          '%';

    this.right =
      this.slider2 > this.slider1
        ? 100 -
          ((this.slider2 - this.allMin) / (this.allMax - this.allMin)) * 100 +
          '%'
        : 100 -
          ((this.slider1 - this.allMin) / (this.allMax - this.allMin)) * 100 +
          '%';

    this.values.emit({ value1: this.slider1, value2: this.slider2 });
  }
}
