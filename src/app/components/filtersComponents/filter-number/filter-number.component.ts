import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-filter-number',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './filter-number.component.html',
  styles: ``
})
export class FilterNumberComponent  {
}
