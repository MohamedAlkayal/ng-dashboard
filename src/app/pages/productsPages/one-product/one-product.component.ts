import { Component } from '@angular/core';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputTextareaComponent } from '../../../components/formComponents/input-textarea/input-textarea.component';
import { InputTwoFieldsComponent } from '../../../components/formComponents/input-two-fields/input-two-fields.component';
import { InputKeywordsComponent } from '../../../components/formComponents/input-keywords/input-keywords.component';
import { CardCtaComponent } from '../../../components/cardComponents/card-cta/card-cta.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-one-product',
  standalone: true,
  imports: [
    CardPromptComponent,
    InputComponent,
    InputTextareaComponent,
    InputTwoFieldsComponent,
    InputKeywordsComponent,
    CardCtaComponent,
    ReactiveFormsModule
  ],
  templateUrl: './one-product.component.html',
  styleUrl: './one-product.component.css',
})
export class OneProductComponent {

  formGroup=new FormGroup({
    _id:new FormControl("",[Validators.required]),
    name:new FormControl("",[Validators.required]),
    images:new FormControl("",[Validators.required]),
    description:new FormControl("",[Validators.required]),
    modelNumber:new FormControl("",[Validators.required]),
    manufacturer:new FormControl("",[Validators.required]),
    countryOfOrigin:new FormControl("",[Validators.required]),
    brandName:new FormControl("",[Validators.required]),
    price:new FormControl("",[Validators.required]),
    discountPercentage:new FormControl("",[Validators.required]),
    ratings:new FormControl("",[Validators.required]),
    category:new FormControl("",[Validators.required]),
    subcategory:new FormControl("",[Validators.required]),
    keywords:new FormControl("",[Validators.required]),
    stock:new FormControl("",[Validators.required]),
    specValue:new FormControl("",[Validators.required]),
    specKey:new FormControl("",[Validators.required]),
    color_l_controlKey:new FormControl ("",[Validators.required]),
    color_l_controlValue:new FormControl ("",[Validators.required]),
  })


  product: any = {
    _id: '65d631485f85f345043df151',
    name: 'Premium Android Smartphone',
    images: [
      {
        name: 'main',
        url: 'https://i.ibb.co/8gtgbn0/57d5b9126319.jpg',
        _id: {
          $oid: '65d631485f85f345043df152',
        },
      },
    ],
    description:
      "Experience the latest in smartphone technology with our Premium Android Smartphone. With its sleek design, powerful performance, and cutting-edge features, it's the perfect choice for tech enthusiasts.",
    modelNumber: 'PA2024',
    manufacturer: 'Tech Innovations Inc.',
    countryOfOrigin: 'United States',
    brandName: 'Tech Innovations',
    colors: [
      {
        colorName: 'Midnight Black',
        quantity: 25,
        _id: {
          $oid: '65d631485f85f345043df153',
        },
      },
      {
        colorName: 'Glacier White',
        quantity: 15,
        _id: {
          $oid: '65d631485f85f345043df154',
        },
      },
      {
        colorName: 'Ocean Blue',
        quantity: 10,
        _id: {
          $oid: '65d631485f85f345043df155',
        },
      },
    ],
    price: 899.99,
    discountPercentage: 5,
    ratings: {
      count: 15,
      average: 4.8,
    },
    reviews: [],
    category: 'Smart Phones',
    subCategory: 'Gaming Phones',
    keywords: ['premium', 'android', 'smartphone', 'flagship', 'tech'],
    frozen: false,
    tickets: [],
    createdAt: {
      $date: '2024-02-21T17:22:16.837Z',
    },
    updatedAt: {
      $date: '2024-02-21T17:22:16.837Z',
    },
    __v: 0,
  };

  ngOnInit() {
    this.product._colors = [];
    this.product._stock = 0;
    this.product._specs = [];
    this.product.colors.map((c: any) => {
      this.product._colors.push({ value: c.colorName, subValue: c.quantity });
      this.product._stock += c.quantity;

console.log(this.formGroup.value)
      // this.formGroup.get('_id')?.patchValue(this.product._id)  
      // this.formGroup.get('firstName')?.patchValue(this.product.name) 
      // this.formGroup.get('lastName')?.patchValue(this.product.lastName)
      // this.formGroup.get('email')?.patchValue(this.product.email)
      // this.formGroup.get('dateOfBirth')?.patchValue(this.product.dateOfBirth)
      // this.formGroup.get('phone_1')?.patchValue(this.product.phones[0])
      // this.formGroup.get('phone_2')?.patchValue(this.product.phones[1])
      // this.formGroup.get('city_1')?.patchValue(this.product.address_1.city)
      // this.formGroup.get('city_2')?.patchValue(this.product.address_2.city)
      // this.formGroup.get('state_1')?.patchValue(this.product.address_1['state'])
      // this.formGroup.get('state_2')?.patchValue(this.product.address_2.state)
      // this.formGroup.get('street_1')?.patchValue(this.product.address_1.street)  
      // this.formGroup.get('street_2')?.patchValue(this.product.address_2.street) 
    });
  }
  onSubmit(productData: any){
    console.log(this.formGroup.value)
    console.log(productData)
    
  }
}
function getFormProduct(product:any){
const myObj={};
for (const key of product) {
  console.log(key);
}
}