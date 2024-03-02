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
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
    ReactiveFormsModule,
  ],
  providers: [AdminOrdersService],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  constructor(
    private ordersService: AdminOrdersService,
    private route: ActivatedRoute
  ) { }

  formGroup = new FormGroup({
    trackingNumber: new FormControl(''),
    userId: new FormControl(''),
    deliveryStatus: new FormControl(''),
    governorate: new FormControl(''),
    city: new FormControl(''),
    sortBy: new FormControl(''),
    price: new FormControl('1000'),
    items: new FormControl('10'),
  });
  trackingNumber: any
  userId: any
  deliveryStatus: any
  governorate: any
  city: any
  sortBy: any
  price: any
  items: any

  handelSubmit(data: any) {
    console.log(this.formGroup.value)
  }

  itemsValue(data: any) {
    console.log(data)
  }
  priceValue(data: any) {
    console.log(data)
  }

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
      this.trackingNumber = params['trackingNumber']
      this.userId = params['userId']
      this.governorate = params['governorate']
      this.city = params['city']
      this.sortBy = params['sortBy']
      this.price = params['price']
      this.items = params['items']


      this.formGroup.get('trackingNumber')?.patchValue(this.trackingNumber)
      this.formGroup.get('userId')?.patchValue(this.userId)
      this.formGroup.get('governorate')?.patchValue(this.governorate)
      this.formGroup.get('city')?.patchValue(this.city)
      this.formGroup.get('sortBy')?.patchValue(this.sortBy)
      this.formGroup.get('price')?.patchValue(this.price)
      this.formGroup.get('items')?.patchValue(this.items)


      params['userId'] = this.formGroup.get('userId')
      params['governorate'] = this.formGroup.get('governorate')
      params['city'] = this.formGroup.get('city')
      params['sortBy'] = this.formGroup.get('sortBy')
      params['price'] = this.formGroup.get('price')
      params['items'] = this.formGroup.get('items')
    });
    this.getOrders(
      this.currentPage,
      this.pageLimit,
      this.trackingNumber,
      this.userId,
      this.governorate,
      this.city,
      this.sortBy,
      this.price,
      this.items
    );
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
  getOrders(
    n: number,
    l: number,
    trackingNumber: '',
    userId: '',
    governorate: '',
    city: '',
    sortBy: '',
    price: '',
    items: ''
  ) {
    this.ordersService.getAll(
      n,
      l,
      trackingNumber,
      userId,
      governorate,
      city,
      sortBy,
      price,
      items
    ).subscribe({
      next: (data: any) => {
        this.ordersCount = data.totalCount;
        this.orders = data.orders;
        this.orders.map((o: any) => {
          o.selected = false;
          o.itemsCount = o.products.length;
          o.addressStr = o.address.city + ' ' + o.address.street;
          o.fullName = o.user?.firstName + ' ' + o.user?.lastName;
        });
        this.orders = this.orders.filter((o: any) => o.user);
        this.itemsCount = this.orders.length;
        this.pagesCount = Math.ceil(this.ordersCount / this.pageLimit);
      },
      error: (err) => console.log(err),
    });
  }
  getPage(pageNumber: any) {
    this.getOrders(
      pageNumber,
      this.pageLimit,
      this.trackingNumber,
      this.userId,
      this.governorate,
      this.city,
      this.sortBy,
      this.price,
      this.items);
  }
}
