import { Component } from '@angular/core';
import { TableComponent } from '../../../components/tableComponents/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FilterTextComponent } from '../../../components/filtersComponents/filter-text/filter-text.component';
import { FilterDropdownComponent } from '../../../components/filtersComponents/filter-dropdown/filter-dropdown.component';
import { FilterRangeComponent } from '../../../components/filtersComponents/filter-range/filter-range.component';
import { TableControlsComponent } from '../../../components/tableComponents/table-controls/table-controls.component';
import { AdminUserServices } from '../../../services/admin-user.service';
import { locations } from '../../../utilities/geoData';
import { ActivatedRoute } from '@angular/router';
import { PaginationComponent } from '../../../components/tableComponents/pagination/pagination.component';
import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-users',
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
  providers: [AdminUserServices],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  constructor(
    private usersService: AdminUserServices,
    private route: ActivatedRoute
  ) {}

  usersForm = 'test';
  tableCols = [
    { lable: 'Name', colData: 'fullName' },
    { lable: 'Email', colData: 'email' },
    { lable: 'Phone', colData: 'mainPhone' },
    { lable: 'City', colData: 'city' },
    { lable: 'Orders', colData: 'orders' },
    { lable: 'Status', colData: 'isActive' },
  ];
  // ####### page initiation
  users: any;
  usersCount!: number;
  pageLimit: number = 15;
  itemsCount!: number;
  currentPage!: number;
  pagesCount!: number;

  // #######
  selectedItems: string[] = [];
  // ####### filters
  governorates: string[] = [];
  selectedGov: any = '';
  selectedCities: string[] = [];
  // search: any = '';
  // gender: string = '';

  applyFilters() {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.currentPage = params['page'] ? +params['page'] : 1;
    });
    locations.map((l) => this.governorates.push(l.governorate));
    this.getUsers(this.currentPage, this.pageLimit);
  }

  getSelected(selectedIDs: any) {
    this.selectedItems = selectedIDs;
  }

  getSelectedGov(gov: any) {
    this.selectedGov = locations.find((l) => l.governorate == gov);
    this.selectedCities = this.selectedGov.cities;
  }

  getPage(pageNumber: any) {
    this.getUsers(pageNumber, this.pageLimit);
  }

  getUsers(p: number, l: number) {
    this.usersService.getAllUsers(p, l, 'createdAt').subscribe({
      next: (data: any) => {
        this.users = data.users;
        this.usersCount = data.totalCount;
        this.users.map((u: any) => {
          u.email = u.email.toLowerCase();
          u.selected = false;
          u.fullName = u.firstName + ' ' + u.lastName;
          u.mainPhone = u.phones[0];
          u.isActive = u.active ? 'Active' : 'Suspended';
          u.city = u.address_1.city;
        });
        this.itemsCount = this.users.length;
        this.pagesCount = Math.ceil(this.usersCount / this.pageLimit);
      },
      error: (err) => console.log(err),
    });
  }
}
