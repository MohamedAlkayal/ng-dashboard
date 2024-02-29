import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule, Route, ActivatedRoute } from '@angular/router';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputInnerLableComponent } from '../../../components/formComponents/input-inner-lable/input-inner-lable.component';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { CardCtaComponent } from '../../../components/cardComponents/card-cta/card-cta.component';
import { AdminUserServices } from '../../../services/admin-user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { governorates, locations } from '../../../utilities/geoData';
import { InputInnerDropdownComponent } from '../../../components/formComponents/input-inner-dropdown/input-inner-dropdown.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterModule,
    InputComponent,
    InputInnerLableComponent,
    CardPromptComponent,
    CardCtaComponent,
    InputInnerDropdownComponent,
    CommonModule,
  ],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css',
})
export class OneUserComponent {
  @Input() isInputTouched: boolean = false;
  @Input() innerInputTouched: boolean = false;
  @Output() userData = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private userService: AdminUserServices
  ) {}

  user: any;
  userID!: string;
  locations: any[] = locations;
  governorates: string[] = governorates;
  cities_1: any;
  cities_2: any;

  isDisabeled: boolean = true;

  ngOnInit() {
    this.userID = this.route.snapshot.params['user_ID'];
    this.userService.getUser(this.userID).subscribe({
      next: (data) => {
        this.user = data;
        this.user.email = this.user.email.toLowerCase();
        this.cities_1 = this.locations.find(
          (l) => l.governorate === this.user.address_1?.state
        )?.cities;
        this.cities_2 = this.locations.find(
          (l) => l.governorate === this.user.address_2?.state
        )?.cities;
      },
    });
  }

  sendUserData(e: any) {
    this.userData.emit(this.user);
  }
  // to undisable buttons
  innerinputTouched(e: any) {
    this.isDisabeled = e;
  }
  InputTouched(e: any) {
    this.isDisabeled = e;
  }

  getSelectedGov_1(gov_1: any) {
    this.locations.map((l) =>
      l.governorate === gov_1 ? (this.cities_1 = l.cities) : null
    );
  }

  getSelectedGov_2(gov_2: any) {
    this.locations.map((l) =>
      l.governorate === gov_2 ? (this.cities_2 = l.cities) : null
    );
  }
}
