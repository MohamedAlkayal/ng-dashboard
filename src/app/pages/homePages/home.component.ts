import { Component } from '@angular/core';
import { InputInnerLableComponent } from '../../components/formComponents/input-inner-lable/input-inner-lable.component';
import { LoginComponent } from '../login/login.component';
import { InputInnerDropdownLableComponent } from '../../components/formComponents/input-inner-dropdown-lable/input-inner-dropdown-lable.component';
import { InputTextareaComponent } from '../../components/formComponents/input-textarea/input-textarea.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cities: string[] = ['Cairo', 'Giza'];
  states: string[] = ['Kitkat'];
}
