import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule, Route, ActivatedRoute } from '@angular/router';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputInnerLableComponent } from '../../../components/formComponents/input-inner-lable/input-inner-lable.component';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { CardCtaComponent } from '../../../components/cardComponents/card-cta/card-cta.component';

@Component({
  selector: 'app-one-user',
  standalone: true,
  imports: [
    RouterModule,
    InputComponent,
    InputInnerLableComponent,
    CardPromptComponent,
    CardCtaComponent,
  ],
  templateUrl: './one-user.component.html',
  styleUrl: './one-user.component.css',
})
export class OneUserComponent {
  constructor(private route: ActivatedRoute) {}

  userID!: string;

  user: any = {
    _id: '65d28902e66358a2bbe92202',
    firstName: 'Mu',
    lastName: 'Young',
    email: 'MuYoung@g.com',
    active: true,
    phones: [1090562346],
    wishlist: [],
    orders: [
      '65d2989c8b1b375206b1b1e6',
      '65d299858b1b375206b1b1fe',
      '65d32d58c1cc42297fe4f6c3',
      '65d32dcc8c54c9254fa34844',
    ],
    dateOfBirth: '1997-06-27',
    address1: {
      street: '5th',
      city: 'Fayed',
      state: 'Ismailia',
    },
    address2: {
      street: '',
      city: '',
      state: '',
    },
    cart: [],
    createdAt: '2024-02-18T22:47:30.534Z',
    updatedAt: '2024-02-19T10:30:36.120Z',
    __v: 0,
  };

  locations: any[] = [
    {
      governorate: 'Alexandria',
      cities: [
        'Alexandria',
        'Borg El Arab',
        'Kafr El Dawwar',
        'Damanhur',
        'Rosetta',
      ],
    },
    {
      governorate: 'Aswan',
      cities: ['Aswan', 'Kom Ombo', 'Edfu', 'Abu Simbel', 'Nasr al-Nuba'],
    },
    {
      governorate: 'Asyut',
      cities: ['Asyut', 'Sohag', 'Dairut', 'Abnub', 'Al Badari'],
    },
    {
      governorate: 'Beheira',
      cities: [
        'Damanhur',
        'Rashid',
        'Kafr El Dawwar',
        'Abu Hummus',
        'Kom Hamada',
      ],
    },
    {
      governorate: 'Beni Suef',
      cities: ['Beni Suef', 'El Wasta', 'Bibah', 'Naser', 'Al Fashn'],
    },
    {
      governorate: 'Cairo',
      cities: [
        'Cairo',
        'Giza',
        'Shubra El-Kheima',
        'Helwan',
        '6th of October City',
      ],
    },
    {
      governorate: 'Dakahlia',
      cities: ['Mansoura', 'Mit Ghamr', 'Talkha', 'Agami', 'Sherbin'],
    },
    {
      governorate: 'Damietta',
      cities: [
        'Damietta',
        'Kafr El Shaykh Saad',
        'Ras El Bar',
        'Faraskur',
        'Zarqa',
      ],
    },
    {
      governorate: 'Faiyum',
      cities: ['Faiyum', 'Sinnuris', 'Tamiya', 'Ihnasia', 'Abu al-Matamir'],
    },
    {
      governorate: 'Gharbia',
      cities: ['Tanta', 'Kafr El Zayat', 'Zefta', 'Basyoun', 'Mehallet Qasr'],
    },
    {
      governorate: 'Giza',
      cities: [
        'Giza',
        '6th of October City',
        'Sheikh Zayed City',
        'Al Haram',
        'Imbaba',
      ],
    },
    {
      governorate: 'Ismailia',
      cities: ['Ismailia', 'Fayed', 'Arbaeen', 'Ataqah', 'El Qantara'],
    },
    {
      governorate: 'Kafr El Sheikh',
      cities: ['Kafr El Sheikh', 'Desouk', 'Metoubes', 'Biyala', 'Fouh'],
    },
    {
      governorate: 'Luxor',
      cities: ['Luxor', 'Karnak', 'New Karnak', 'Armant', 'Esna'],
    },
    {
      governorate: 'Matrouh',
      cities: ['Marsa Matrouh', 'Siwa', 'El Hamam', 'El Alamein', 'Siwah'],
    },
    {
      governorate: 'Minya',
      cities: ['Minya', 'Beni Mazar', 'Mallawi', 'Deir Mawas', 'Maghagha'],
    },
    {
      governorate: 'Monufia',
      cities: ['Shebin El Kom', 'Ashmoun', 'Menouf', 'Sadat City', 'Quesna'],
    },
    {
      governorate: 'New Valley',
      cities: ['Kharga', 'Dakhla', 'Farafra', 'Baris', 'Mut'],
    },
    {
      governorate: 'North Sinai',
      cities: ['El Arish', 'Rafah', 'Bir al-Abed', 'Nakhl', 'Sheikh Zuweid'],
    },
    {
      governorate: 'Port Said',
      cities: ['Port Said', 'Port Fuad', 'El-Manakh', 'El-Zohour', 'El-Salam'],
    },
    {
      governorate: 'Qena',
      cities: ['Qena', 'Luxor', 'Nag Hammadi', 'Dendera', 'Farshout'],
    },
    {
      governorate: 'Qalyubia',
      cities: ['Benha', 'Qalyub', 'Shubra El-Kheima', 'Banha', 'Khanka'],
    },
    {
      governorate: 'Red Sea',
      cities: [
        'Hurghada',
        'Sharm El Sheikh',
        'El Gouna',
        'Safaga',
        'Marsa Alam',
      ],
    },
    {
      governorate: 'Sharqia',
      cities: [
        'Zagazig',
        'Al-Ibrahimiyah',
        'Abu Hammad',
        'Al-Qanayat',
        'Al-Husayniyah',
      ],
    },
    {
      governorate: 'Sohag',
      cities: ['Sohag', 'Gerga', 'Gohina', 'Dar El Salam', 'Al Maragha'],
    },
    {
      governorate: 'South Sinai',
      cities: [
        'Sharm El Sheikh',
        'Dahab',
        'Nuweiba',
        'Saint Catherine',
        'Ras Sidr',
      ],
    },
    {
      governorate: 'Suez',
      cities: ['Suez', 'Ismailia', 'Fayed', 'Arbaeen', 'Ataqah'],
    },
  ];
  governments: string[] = [
    'Alexandria',
    'Aswan',
    'Asyut',
    'Beheira',
    'Beni Suef',
    'Cairo',
    'Dakahlia',
    'Damietta',
    'Faiyum',
    'Gharbia',
    'Giza',
    'Ismailia',
    'Kafr El Sheikh',
    'Luxor',
    'Matrouh',
    'Minya',
    'Monufia',
    'New Valley',
    'North Sinai',
    'Port Said',
    'Qena',
    'Qalyubia',
    'Red Sea',
    'Sharqia',
    'Sohag',
    'South Sinai',
    'Suez',
  ];
  selectedCities1: string[] = [];
  selectedGov1!: any;
  selectedCities2: string[] = [];
  selectedGov2!: any;

  ngOnInit() {
    this.userID = this.route.snapshot.params['user_ID'];
    this.user._phones = [
      {
        lable: '+20',
        data: this.user.phones[0],
        type: 'number',
      },
      {
        lable: '+20',
        data: this.user.phones[1] || null,
        type: 'number',
      },
    ];
    this.user._address1 = [
      {
        lable: 'State',
        data: this.user.address1.state,
        type: 'text',
        isDropdown: true,
        options: this.governments,
      },
      {
        lable: 'City',
        data: this.user.address1.city,
        type: 'text',
        isDropdown: true,
        options:
          this.locations.find((l) => l.governorate == this.user.address1.state)
            .cities || [],
      },
      {
        lable: 'Street',
        data: this.user.address1.street,
        type: 'text',
        isDropdown: false,
      },
    ];
    this.user._address2 = [
      {
        lable: 'State',
        data: this.user.address2.state,
        type: 'text',
        isDropdown: true,
        options: this.governments,
      },
      {
        lable: 'City',
        data: this.user.address2.city,
        type: 'text',
        isDropdown: true,
        options:
          this.locations.find((l) => l.governorate == this.user.address1.state)
            .cities || [],
      },
      {
        lable: 'Street',
        data: this.user.address2.street,
        type: 'text',
        isDropdown: false,
      },
    ];
  }

  getSelectedGov1(gov: any) {
    this.selectedGov1 = this.locations.find((l) => l.governorate == gov);
    this.user._address1[1].options = this.selectedGov1.cities;
  }
  getSelectedGov2(gov: any) {
    this.selectedGov2 = this.locations.find((l) => l.governorate == gov);
    this.user._address2[1].options = this.selectedGov2.cities;
  }
}
