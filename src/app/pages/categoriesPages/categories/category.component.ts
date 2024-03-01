import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../../components/list/list.component';
import { AdminCategoriesService } from '../../../services/admin-categories.service';
import { OneCategoryComponent } from '../oneCategory/one-category.component';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    ListComponent,
    OneCategoryComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AdminCategoriesService],
  templateUrl: './category.component.html',
})
export class CategoryComponent {
  constructor(private categories: AdminCategoriesService) {}
  categoriesFromDb: any[] = [];
  selectedCategory: any;
  newCat = false;
  isLoading: boolean = true;

  formGroup = new FormGroup({
    listInput: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
    this.categories.getAll().subscribe({
      next: (response: any) => {
        this.categoriesFromDb = response.categories;
        this.selectedCategory = this.categoriesFromDb[0];
        this.isLoading = false;
      },
      error(err) {
        console.log(err);
      },
    });
  }

  handleSelectedComponent(args: any) {
    this.selectedCategory = this.categoriesFromDb.find((e) => e._id === args);
  }

  handleNewCategory(args: any) {
    this.newCat = true;
    this.selectedCategory = {
      name: 'New Category',
      description: 'New Description',
      subCategories: ['New Subcategory'],
    };
  }
  handleCategoryChange() {
    this.isLoading = true;
    this.categories.getAll().subscribe({
      next: (response: any) => {
        this.categoriesFromDb = response.categories;
        this.selectedCategory = this.categoriesFromDb[0];
        this.isLoading = false;
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
