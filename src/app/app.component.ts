import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FilterTextComponent } from './components/filtersComponents/filter-text/filter-text.component';
import { FilterNumberComponent } from './components/filtersComponents/filter-number/filter-number.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgControl } from '@angular/forms';
import { FilterDropdownComponent } from './components/filtersComponents/filter-dropdown/filter-dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,FilterDropdownComponent,FilterTextComponent,FilterNumberComponent,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent  implements OnInit {
  ngOnInit(): void {

  }
  city:string[]=["Cairo","Giza","Zagazig","Alex"]
  title = 'dashboard';
 @Input() numFilterValue(data:any){
    console.log(data)
  }

}
