import { Component } from '@angular/core';
import { AdminServices } from '../../../services/admin.service';
import { ListComponent } from '../../../components/list/list.component';
import { OneAdminComponent } from '../one-admin/one-admin.component';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [ListComponent, OneAdminComponent],
  providers: [AdminServices],
  templateUrl: './admins.component.html',
  styles: '',
})
export class AdminsComponent {
  constructor(private admin: AdminServices) {}
  adminsFromDb: any[] = [];
  selectedAdmin: any;
  newAdmin = false;
  isLoading = true;

  ngOnInit(): void {
    this.admin.getAll().subscribe({
      next: (response: any) => {
        this.adminsFromDb = response.admins;
        this.selectedAdmin = this.adminsFromDb[0];
        this.isLoading = false;
      },
      error(x) {
        console.log(x);
      },
    });
  }
  handleSelectedComponent(args: any) {
    this.newAdmin = false;
    this.selectedAdmin = this.adminsFromDb.find((e) => e._id === args);
    console.log(this.selectedAdmin);
  }
  handlenewAdmin(args: any) {
    this.newAdmin = true;
    this.selectedAdmin = {
      username: '',
      createdBy: '',
      authorities: {
        admin: false,
        categories: false,
        orders: false,
        products: false,
        users: false,
        vouchers: false,
      },
    };
  }
  handleAdminChange() {
    this.isLoading = true;
    this.admin.getAll().subscribe({
      next: (response: any) => {
        this.adminsFromDb = response.admins;
        this.selectedAdmin = this.adminsFromDb[0];
        console.log(response);
        this.isLoading = false;
      },
      error(x) {
        console.log(x);
      },
    });
  }
}
