import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TokenUtilsService } from './services/token/token-utils.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'dashboard';

  constructor(private tokenService: TokenUtilsService,private toaster:ToastrService) {}

  user!: any;

  // showData(){
  //   this.toaster.success('Welcome to my app!',"success");
  //   this.toaster.error('out from my app!',"error");
  //   this.toaster.info('Welcome to my app!',"info");
  //   this.toaster.warning('Welcome to my app!',"warning");
  // }
  ngOnInit() {
    setTimeout(() => {
      this.tokenService.cheackForTokenExpiration();
    }, 1);
  }
}

