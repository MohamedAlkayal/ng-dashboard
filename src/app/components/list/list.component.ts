import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { InputComponent } from '../formComponents/input/input.component';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [InputComponent, CommonModule],
  templateUrl: './list.component.html',
  styles: '',
})
export class ListComponent implements OnInit {
  @Input() list: any[] = [];
  @Input() addingButtonText: string = '';
  @Input() shownAttr: string = 'name';
  @Output() selectedComponent = new EventEmitter();
  @Output() newListItem = new EventEmitter();

  ngOnInit(): void {}

  handelSelect(id: string) {
    this.selectedComponent.emit(id);
  }

  newCategoryClick() {
    this.newListItem.emit();
  }
}
