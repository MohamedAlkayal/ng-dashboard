import { Component } from '@angular/core';
import { FilterRangeComponent } from '../../components/filtersComponents/filter-range/filter-range.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FilterRangeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
