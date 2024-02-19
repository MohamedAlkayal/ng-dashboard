import { Component } from '@angular/core';
<<<<<<< HEAD
import { InputInnerLableComponent } from '../../components/formComponents/input-inner-lable/input-inner-lable.component';
import { LoginComponent } from '../login/login.component';
import { InputInnerDropdownLableComponent } from '../../components/formComponents/input-inner-dropdown-lable/input-inner-dropdown-lable.component';
import { InputTextareaComponent } from '../../components/formComponents/input-textarea/input-textarea.component';
=======
import { TableComponent } from '../../components/tableComponents/table/table.component';
>>>>>>> 3609adfd25a2fcd22f1d169dcbf74c4738f5e637

@Component({
  selector: 'app-home',
  standalone: true,
<<<<<<< HEAD
  imports: [InputTextareaComponent],
=======
  imports: [TableComponent],
>>>>>>> 3609adfd25a2fcd22f1d169dcbf74c4738f5e637
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cities: string[] = ["Cairo","Giza"];
  states: string[] = ["Kitkat"];



}
