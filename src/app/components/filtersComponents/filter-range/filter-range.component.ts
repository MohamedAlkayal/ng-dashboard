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
  @Input() step!: number;
  @Input() lable!: string;
  @Output() values = new EventEmitter();

  slider1!: number;
  slider2!: number;

  left!: string;
  right!: string;

  ngOnInit(): void {
    this.slider1 = this.allMin;
    this.slider2 = this.allMax * 0.5;
    this.updateValues();
  }

  updateValues() {
    this.left =
      this.slider1 < this.slider2
        ? (this.slider1 / this.allMax) * 100 + '%'
        : (this.slider2 / this.allMax) * 100 + '%';

    this.right =
      this.slider2 > this.slider1
        ? 100 - (this.slider2 / this.allMax) * 100 + '%'
        : 100 - (this.slider1 / this.allMax) * 100 + '%';

    this.values.emit({ value1: this.slider1, value2: this.slider2 });
  }
}
