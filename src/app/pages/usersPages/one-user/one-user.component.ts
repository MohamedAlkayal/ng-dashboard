import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule, Route, ActivatedRoute } from '@angular/router';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputInnerLableComponent } from '../../../components/formComponents/input-inner-lable/input-inner-lable.component';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { CardCtaComponent } from '../../../components/cardComponents/card-cta/card-cta.component';
import { AdminUserServices } from '../../../services/admin-user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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


  ngOnInit() {
    this.userID = this.route.snapshot.params['user_ID'];
    this.userService.getUser(this.userID).subscribe({
      next: (data) => {
        this.user = data;
        this.user.email = this.user.email.toLowerCase();
        // this.cities_1 = this.locations.find(
        //   (l) => l.governorate === this.user.address_1?.state
        // )?.cities;
        // this.cities_2 = this.locations.find(
        //   (l) => l.governorate === this.user.address_2?.state
        // )?.cities;
        console.log(this.user)    
        // this.formGroup.patchValue({_id: this.user._id,firstName:this.user.firstName,lastName:this.user.lastName}) 
      this.formGroup.get('_id')?.patchValue(this.user._id)  
      this.formGroup.get('firstName')?.patchValue(this.user.firstName) 
      this.formGroup.get('lastName')?.patchValue(this.user.lastName)
      this.formGroup.get('email')?.patchValue(this.user.email)
      this.formGroup.get('dateOfBirth')?.patchValue(this.user.dateOfBirth)
      this.formGroup.get('phone_1')?.patchValue(this.user.phones[0])
      this.formGroup.get('phone_2')?.patchValue(this.user.phones[1])
      this.formGroup.get('city_1')?.patchValue(this.user.address_1.city)
      this.formGroup.get('city_2')?.patchValue(this.user.address_2.city)
      this.formGroup.get('state_1')?.patchValue(this.user.address_1['state'])
      this.formGroup.get('state_2')?.patchValue(this.user.address_2.state)
      this.formGroup.get('street_1')?.patchValue(this.user.address_1.street)  
      this.formGroup.get('street_2')?.patchValue(this.user.address_2.street)    
 
      },

    });

  }


  formGroup=new FormGroup({
    _id:new FormControl("",[Validators.required]),
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required]),
    dateOfBirth:new FormControl("",[Validators.required]),
    phone_1:new FormControl("",[Validators.required]),
    phone_2:new FormControl("",[Validators.required]),
    street_1:new FormControl("",[Validators.required]),
    city_1:new FormControl("",[Validators.required]),
    state_1:new FormControl("",[Validators.required]),
    street_2:new FormControl("",[Validators.required]),
    city_2:new FormControl("",[Validators.required]),
    state_2:new FormControl("",[Validators.required]),
  })
  
  
  onSubmit(e:any){
    e.preventDefault()
    console.log(this.formGroup.value)
  }


  isDisabeled: boolean = true;



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
    console.log(this.formGroup.get('state_1'))
    this.locations.map((l) =>
      l.governorate === this.formGroup.get('state_1')?.value ? (this.cities_1 = l.cities) : null
    );
  }

  getSelectedGov_2(gov_2: any) {
    console.log(this.formGroup.get('state_2'))
    this.locations.map((l) =>
      l.governorate === this.formGroup.get('state_2')?.value ? (this.cities_2 = l.cities) : null
    );
  }
}
