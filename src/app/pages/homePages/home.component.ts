import { Component } from '@angular/core';
import { TableComponent } from '../../components/tableComponents/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersControlServicesService } from '../../services/user/users-control-services.service';
import { AdminServices } from '../../services/admin/admin.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableComponent, HttpClientModule],
  providers: [UsersControlServicesService, AdminServices],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  res: any;
  constructor(
    private service: UsersControlServicesService,
    private admin: AdminServices
  ) {
    this.admin.loginAdmin('jessica', 'jessicaPassword@A1').subscribe({
      next(x: any) {
        console.log(x.username);
        localStorage.setItem(
          'currentUser',
          JSON.stringify({ username: x.username, token: x.token })
        );
      },
      error(error) {
        console.log(error);
      },
    });
  }
}
