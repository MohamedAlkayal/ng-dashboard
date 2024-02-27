import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { InputComponent } from '../formComponents/input/input.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputComponent],
  templateUrl: './list.component.html',
  styles: '',
})
export class ListComponent implements OnInit {
  @Output() selectedComponent = new EventEmitter();
  @Output() newCategoryEvent = new EventEmitter();
  @Input() categories: any[] = [];
  ngOnInit(): void {}
  newCategoryName: string = '';
  onClick(id: string) {
    this.selectedComponent.emit(id);
  }
  newCategoryClick() {
    this.newCategoryEvent.emit({
      name: this.newCategoryName,
      description: '',
      subCategories: [],
    });
  }
}
