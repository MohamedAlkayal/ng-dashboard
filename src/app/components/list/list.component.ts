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
  @Output() newListItem = new EventEmitter();
  @Input() list: any[] = [];
  @Input() newPlaceholderText: string = '';
  @Input() addingButtonText: string = '';
  @Input() shownAttr: string = 'name';
  ngOnInit(): void {}
  newCategoryName: string = '';
  onClick(id: string) {
    this.selectedComponent.emit(id);
  }
  newCategoryClick() {
    this.newListItem.emit(this.newCategoryName);
  }
}
