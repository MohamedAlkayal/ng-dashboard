import { Component } from '@angular/core';
import { TableComponent } from '../../../components/tableComponents/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FilterTextComponent } from '../../../components/filtersComponents/filter-text/filter-text.component';
import { FilterDropdownComponent } from '../../../components/filtersComponents/filter-dropdown/filter-dropdown.component';
import { FilterRangeComponent } from '../../../components/filtersComponents/filter-range/filter-range.component';
import { TableControlsComponent } from '../../../components/tableComponents/table-controls/table-controls.component';
import { AdminOrdersService } from '../../../services/admin-orders.service';
import { locations } from '../../../utilities/geoData';
import { ActivatedRoute } from '@angular/router';
import { PaginationComponent } from '../../../components/tableComponents/pagination/pagination.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    TableComponent,
    MatIconModule,
    CommonModule,
    FilterTextComponent,
    FilterDropdownComponent,
    FilterRangeComponent,
    TableControlsComponent,
    PaginationComponent,
  ],
  providers: [AdminOrdersService],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  constructor(
    private ordersService: AdminOrdersService,
    private route: ActivatedRoute
  ) {}

  tableCols = [
    { lable: 'Tracking No.', colData: 'trackingNumber' },
    { lable: 'Invoice Price', colData: 'finalPrice' },
    { lable: 'Payment', colData: 'paymentMethod' },
    { lable: 'Items', colData: 'itemsCount' },
    { lable: 'User Name', colData: 'fullName' },
    { lable: 'Address', colData: 'addressStr' },
    { lable: 'Delivery Status', colData: 'deliveryStatus' },
  ];

  orders: any = [];
  ordersCount!: number;
  pageLimit: number = 15;
  itemsCount!: number;
  currentPage!: number;
  pagesCount!: number;

  locations: any[] = locations;
  governorates: string[] = [];
  selectedItems: string[] = [];
  selectedCities: string[] = [];
  selectedGov!: any;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] ? +params['page'] : 1;
    });
    this.getOrders(this.currentPage, this.pageLimit);
    locations.map((l) => this.governorates.push(l.governorate));
    this.orders.map((o: any) => {
      o.selected = false;
      o.itemsCount = o.products.length;
      o.addressStr = o.address.city + ' ' + o.address.street;
      o.user.username = 'username';
      o.username = o.user.username;
    });
  }

  getSelected(data: any) {
    this.selectedItems = data;
  }

  getSelectedGov(gov: any) {
    this.selectedGov = this.locations.find((l) => l.governorate == gov);
    console.log(this.selectedGov);
    this.selectedCities = this.selectedGov.cities;
  }

  getOrders(n: number, l: number) {
    this.ordersService.getAll(n, l).subscribe({
      next: (data: any) => {
        this.ordersCount = 4;
        this.orders = data.orders;
        this.orders.map((o: any) => {
          o.selected = false;
          o.itemsCount = o.products.length;
          o.addressStr = o.address.city + ' ' + o.address.street;
          o.fullName = o.user.firstName + ' ' + o.user.lastName;
        });
        this.itemsCount = this.orders.length;
        this.pagesCount = Math.ceil(this.itemsCount / this.pageLimit);
      },
      error: (err) => console.log(err),
    });
  }

  getPage(pageNumber: any) {
    this.getOrders(pageNumber, this.pageLimit);
  }
}
