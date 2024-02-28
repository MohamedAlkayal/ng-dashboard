import { Component, OnInit } from '@angular/core';
import { ListComponent } from '../../../components/list/list.component';
import { AdminCategoriesService } from '../../../services/admin-categories.service';
import { OneCategoryComponent } from '../oneCategory/one-category.component';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ListComponent, OneCategoryComponent],
  providers: [AdminCategoriesService],
  templateUrl: './category.component.html',
  styles: '',
})
export class CategoryComponent implements OnInit {
  constructor(private categories: AdminCategoriesService) {}
  categoriesFromDb: any[] = [];
  selectedCategory: any;
  newCat = false;

  ngOnInit(): void {
    this.categories.getAll().subscribe({
      next: (response: any) => {
        this.categoriesFromDb = response.categories;
        this.selectedCategory = this.categoriesFromDb[0];
      },
      error(x) {
        console.log(x);
      },
    });
  }
  handleSelectedComponent(args: any) {
    this.newCat = false;
    this.selectedCategory = this.categoriesFromDb.filter(
      (e) => e._id === args
    )[0];
  }
  handleNewCategory(args: any) {
    this.newCat = true;
    this.selectedCategory = {
      name: args,
      subCategories: [],
      description: '',
    };
  }
  handleCategoryChange() {
    this.categories.getAll().subscribe({
      next: (response: any) => {
        this.categoriesFromDb = response.categories;
        this.selectedCategory = this.categoriesFromDb[0];
      },
      error(x) {
        console.log(x);
      },
    });
  }
}
