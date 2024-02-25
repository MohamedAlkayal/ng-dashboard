import { Component } from '@angular/core';
import { TableComponent } from '../../../components/tableComponents/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FilterTextComponent } from '../../../components/filtersComponents/filter-text/filter-text.component';
import { FilterDropdownComponent } from '../../../components/filtersComponents/filter-dropdown/filter-dropdown.component';
import { FilterRangeComponent } from '../../../components/filtersComponents/filter-range/filter-range.component';
import { TableControlsComponent } from '../../../components/tableComponents/table-controls/table-controls.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    TableComponent,
    MatIconModule,
    CommonModule,
    FilterTextComponent,
    FilterDropdownComponent,
    FilterRangeComponent,
    TableControlsComponent,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  tableCols = [
    { lable: 'Tracking No.', colData: 'trackingNumber' },
    { lable: 'Invoice Price', colData: 'finalPrice' },
    { lable: 'Payment', colData: 'paymentMethod' },
    { lable: 'Items', colData: 'itemsCount' },
    { lable: 'User Name', colData: 'username' },
    { lable: 'Address', colData: 'addressStr' },
    { lable: 'Delivery Status', colData: 'deliveryStatus' },
  ];
  orders: any = [
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        user_id: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
    {
      _id: '65d32d58c1cc42297fe4f6c3',
      trackingNumber: '65as172',
      user: {
        $oid: '65d28902e66358a2bbe92202',
      },
      address: {
        street: '123 Main St',
        city: 'Cityville',
        state: 'Stateville',
        country: 'Countryland',
      },
      paymentMethod: 'Credit Card',
      deliveryStatus: 'pending',
      voucher: 'WELCOME10',
      finalPrice: 50,
      products: [],
      createdAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      updatedAt: {
        $date: '2024-02-19T10:28:40.384Z',
      },
      __v: 0,
    },
  ];
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
  selectedItems: string[] = [];
  selectedCities: string[] = [];
  selectedGov!: any;

  ngOnInit() {
    this.orders.map((o: any) => {
      o.selected = false;
      o.itemsCount = o.products.length;
      o.addressStr = o.address.city + ' ' + o.address.street;
      o.user.username = 'username';
      o.username = o.user.username;
    });
  }

  getSelected(data: any) {
    this.selectedItems = data;
  }

  getSelectedGov(gov: any) {
    this.selectedGov = this.locations.find((l) => l.governorate == gov);
    console.log(this.selectedGov);
    this.selectedCities = this.selectedGov.cities;
  }
}
