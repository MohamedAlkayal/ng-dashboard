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
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from '../../../components/tableComponents/pagination/pagination.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  search: any;
  gender: any;
  governorate: any;
  city: any;
  sortBy: any;
  age: any;

  formGroup = new FormGroup({
    search: new FormControl('', [Validators.maxLength(50)]),
    gender: new FormControl('', [Validators.maxLength(6)]),
    governorates: new FormControl('', [Validators.maxLength(30)]),
    city: new FormControl('', [Validators.maxLength(30)]),
    sortBy: new FormControl('', [Validators.maxLength(10)]),
  });
  filtrationData: {} = {};
  data: {} = {};

  ageValues(data: any) {
    console.log(data);
    this.data = data;
  }

  handelSubmit(data: any) {
    this.search = this.formGroup.get('search')?.value;
    this.gender = this.formGroup.get('gender')?.value;
    this.governorate = this.formGroup.get('governorate')?.value;
    this.city = this.formGroup.get('city')?.value;
    switch (this.formGroup.get('sortBy')?.value) {
      case 'Name':
        this.sortBy = 'firstName';
        break;
      case 'Email':
        this.sortBy = 'email';
        break;
      case 'Status':
        this.sortBy = 'active';
        break;
      case 'Orders':
        this.sortBy = 'orders';
        break;

      default:
        this.sortBy = '';
        break;
    }

    this.getUsers(
      1,
      this.pageLimit,
      this.search,
      this.gender,
      this.governorate,
      this.city,
      this.sortBy,
      ''
    );
    this.router.navigate([`/admin/users`], {
      queryParams: {
        page: 1,
        search: this.search,
        gender: this.gender,
        governorate: this.governorate,
        city: this.city,
        sortBy: this.sortBy,
        age: '',
      },
    });
  }
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
  // gender: string = '';F

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.search = params['search'];
      this.gender = params['gender'];
      this.governorate = params['governorate'];
      this.city = params['city'];
      this.sortBy = params['sortBy'];
      this.age = params['age'];
      this.currentPage = params['page'] ? +params['page'] : 1;
      this.formGroup.get('search')?.patchValue(this.search);
      this.formGroup.get('gender')?.patchValue(this.gender);
      this.formGroup.get('governorates')?.patchValue(this.governorate);
      console.log(this.governorate);
      this.getSelectedGov(this.governorate);
      this.formGroup.get('city')?.patchValue(this.city);
      this.formGroup.get('sortBy')?.patchValue(this.sortBy);
    });
    locations.map((l) => this.governorates.push(l.governorate));
    this.getUsers(
      this.currentPage,
      this.pageLimit,
      this.search,
      this.gender,
      this.governorate,
      this.city,
      this.sortBy,
      ''
    );
  }
  getSelected(selectedIDs: any) {
    this.selectedItems = selectedIDs;
  }
  getSelectedGov(gov: any) {
    this.selectedGov = locations.find((l) => l.governorate == gov);
    this.selectedCities = this.selectedGov?.cities;
  }
  getPage(pageNumber: any) {
    this.getUsers(
      pageNumber,
      this.pageLimit,
      this.search,
      this.gender,
      this.governorate,
      this.city,
      this.sortBy,
      this.age
    );
  }

  render(data: any) {
    this.getUsers(
      this.currentPage,
      this.pageLimit,
      this.search,
      this.gender,
      this.governorate,
      this.city,
      this.sortBy,
      this.age
    );
  }

  getUsers(
    p: number,
    l: number,
    search: string,
    gender: string,
    governorate: string,
    city: string,
    sortBy: string,
    age: string
  ) {
    this.usersService
      .getAllUsers(p, l, sortBy, 'asc', search, gender, governorate, city)
      .subscribe({
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
