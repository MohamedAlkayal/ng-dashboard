import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from '../../../components/tableComponents/table/table.component';
import { TableControlsComponent } from '../../../components/tableComponents/table-controls/table-controls.component';
import { FilterTextComponent } from '../../../components/filtersComponents/filter-text/filter-text.component';
import { FilterDropdownComponent } from '../../../components/filtersComponents/filter-dropdown/filter-dropdown.component';
import { FilterRangeComponent } from '../../../components/filtersComponents/filter-range/filter-range.component';
import { AdminProductService } from '../../../services/admin-product.service';
import { PaginationComponent } from '../../../components/tableComponents/pagination/pagination.component';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    TableComponent,
    TableControlsComponent,
    FilterTextComponent,
    FilterDropdownComponent,
    FilterRangeComponent,
    PaginationComponent,
    ReactiveFormsModule,
  ],
  providers: [AdminProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(
    private productService: AdminProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  selectedItems: string[] = [];
  products: any;
  productsCount!: number;
  itemsCount!: number;
  pageLimit: number = 15;
  currentPage!: number;
  pagesCount!: number;
  isLoading: boolean = false;

  formGroup = new FormGroup({
    _id: new FormControl('', [Validators.maxLength(50)]),
    name: new FormControl('', [Validators.maxLength(6)]),
    brandName: new FormControl('', [Validators.maxLength(30)]),
    category: new FormControl('', [Validators.maxLength(30)]),
    subCategory: new FormControl('', [Validators.maxLength(10)]),
    sortBy: new FormControl('', [Validators.maxLength(10)]),
    price: new FormControl('1000', [Validators.maxLength(10)]),
  });
  _id: any;
  price: any;
  name: any;
  brandName: any;
  category: any;
  subCategory: any;
  sortBy: any;

  ageValues(data: any) {
    this.price = data;
  }

  handelSubmit(data: any) {
    this._id = this.formGroup.get('_id')?.value;
    this.name = this.formGroup.get('name')?.value;
    this.brandName = this.formGroup.get('brandName')?.value;
    this.category = this.formGroup.get('category')?.value;
    this.subCategory = this.formGroup.get('subCategory')?.value;
    this.sortBy = this.formGroup.get('sortBy')?.value;
    this.getProducts(
      1,
      this.pageLimit,
      this._id,
      this.name,
      this.brandName,
      this.category,
      this.subCategory,
      this.sortBy
    );
    this.router.navigate([`/admin/products`], {
      queryParams: {
        page: 1,
        _id: this._id,
        name: this.name,
        brandName: this.brandName,
        category: this.category,
        subCategory: this.subCategory,
        sortBy: this.sortBy,
      },
    });
  }

  tableCols = [
    { lable: 'Name', colData: 'name' },
    { lable: 'Category', colData: 'categoryName' },
    { lable: 'Brand', colData: 'brandName' },
    { lable: 'Price', colData: 'price' },
    { lable: 'Stock', colData: 'stock' },
    { lable: 'Status', colData: 'isFrozen' },
  ];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] ? +params['page'] : 1;
      this._id = params['id'];
      this.name = params['name'];
      this.brandName = params['brandName'];
      this.category = params['category'];
      this.subCategory = params['subCategory'];
      this.sortBy = params['sortBy'];
      this.formGroup.get('_id')?.patchValue(this._id);
      this.formGroup.get('name')?.patchValue(this.name);
      this.formGroup.get('brandName')?.patchValue(this.brandName);
      this.formGroup.get('category')?.patchValue(this.category);
      this.formGroup.get('subCategory')?.patchValue(this.subCategory);
      this.formGroup.get('sortBy')?.patchValue(this.sortBy);
    });
    this.getProducts(
      this.currentPage,
      this.pageLimit,
      this._id,
      this.name,
      this.brandName,
      this.category,
      this.subCategory,
      this.sortBy
    );
  }
  getSelected(data: any) {
    this.selectedItems = data;
  }
  getPage(n: number) {
    this.getProducts(
      n,
      this.pageLimit,
      this._id,
      this.name,
      this.brandName,
      this.category,
      this.subCategory,
      this.sortBy
    );
  }

  render(data: any) {
    this.getProducts(this.currentPage, this.pageLimit, '', '', '', '', '', '');
  }

  getProducts(
    n: number,
    l: number,
    _id: string,
    name: string,
    brandName: string,
    category: string,
    subCategory: string,
    sortBy: string
  ) {
    this.productService
      ?.getAllProducts(
        n,
        l,
        sortBy,
        '',
        _id,
        name,
        brandName,
        category,
        subCategory
      )
      .subscribe({
        next: (data: any) => {
          this.isLoading = true;
          this.products = data.products;
          this.products.map((p: any) => {
            p.name = p.name.split(' ');
            p.name = p.name[0] + ' ' + p.name[1] + ' ' + p.name[2];
            p.categoryName = p.category.name;
            p.selected = false;
            p.stock = 20;
            p.isFrozen = p.frozen ? 'Frozen' : 'Active';
            this.productsCount = data.numberOfProducts;
            this.itemsCount = this.products.length;
            this.pagesCount = Math.ceil(this.productsCount / this.pageLimit);
            this.isLoading = false;
          });
        },
        error: (err) => console.log(err),
      });
  }
}
