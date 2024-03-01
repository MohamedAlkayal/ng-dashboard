import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponent } from '../../../components/tableComponents/table/table.component';
import { TableControlsComponent } from '../../../components/tableComponents/table-controls/table-controls.component';
import { FilterTextComponent } from '../../../components/filtersComponents/filter-text/filter-text.component';
import { FilterDropdownComponent } from '../../../components/filtersComponents/filter-dropdown/filter-dropdown.component';
import { FilterRangeComponent } from '../../../components/filtersComponents/filter-range/filter-range.component';
import { AdminProductService } from '../../../services/admin-product.service';
import { PaginationComponent } from '../../../components/tableComponents/pagination/pagination.component';
import { ActivatedRoute } from '@angular/router';

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
  ],
  providers: [AdminProductService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(
    private productService: AdminProductService,
    private route: ActivatedRoute
  ) {}

  selectedItems: string[] = [];
  products: any;
  productsCount!: number;
  itemsCount!: number;
  pageLimit: number = 15;
  currentPage!: number;
  pagesCount!: number;

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
    });
    this.getProducts(this.currentPage, this.pageLimit);
  }

  getSelected(data: any) {
    this.selectedItems = data;
  }

  getPage(n: number) {
    this.getProducts(n, this.pageLimit);
  }

  getProducts(n: number, l: number) {
    this.productService.getAllProducts(n, l, 'createdAt').subscribe({
      next: (data: any) => {
        this.products = data.products;
        this.products.map((p: any) => {
          p.name = p.name.split(' ');
          p.name = p.name[0] + ' ' + p.name[1] + ' ' + p.name[2];
          p.categoryName = p.category.name;
          p.selected = false;
          p.stock = 20;
          p.isFrozen = p.frozen ? 'Frozen' : 'Active';
        });
        this.productsCount = data.numberOfProducts;
        this.itemsCount = this.products.length;
        this.pagesCount = Math.ceil(this.productsCount / this.pageLimit);
      },
      error: (err) => console.log(err),
    });
  }
}
