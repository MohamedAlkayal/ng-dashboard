import { Component } from '@angular/core';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputTextareaComponent } from '../../../components/formComponents/input-textarea/input-textarea.component';
import { InputTwoFieldsComponent } from '../../../components/formComponents/input-two-fields/input-two-fields.component';
import { InputKeywordsComponent } from '../../../components/formComponents/input-keywords/input-keywords.component';
import { CardCtaComponent } from '../../../components/cardComponents/card-cta/card-cta.component';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { MatIcon } from '@angular/material/icon';
import { AdminProductService } from '../../../services/admin-product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminCategoriesService } from '../../../services/admin-categories.service';
import { PromptConfirmComponent } from '../../../components/messagesComponents/prompt-confirm/prompt-confirm.component';
import { PromptDangerComponent } from '../../../components/messagesComponents/prompt-danger/prompt-danger.component';

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
    ReactiveFormsModule,
    MatIcon,
    CommonModule,
    PromptConfirmComponent,
    PromptDangerComponent,

  ],
  providers: [AdminProductService, AdminCategoriesService],
  templateUrl: './one-product.component.html',
  styleUrl: './one-product.component.css',
})
export class OneProductComponent {
  constructor(
    private productsService: AdminProductService,
    private route: ActivatedRoute
  ) {
    this.formGroup.valueChanges.subscribe(() => {
      if (this.formGroup.dirty) {
        // Do something when any input is touched
        this.isDisabled = false;
      }
    });
  }
  promptText =
    'You Are trying to update the Product. Are you sure about your updates?';
  isDisabled = true;
  formGroup = new FormGroup({
    _id: new FormControl({value:'',disabled:true}, [Validators.required]),
    name: new FormControl('', [Validators.required,Validators.minLength(3),
    Validators.maxLength(70)]),
    description: new FormControl('', [Validators.required]),
    modelNumber: new FormControl({value:'',disabled:true}, [Validators.required]),
    manufacturer: new FormControl({value:'',disabled:true}, [Validators.required]),
    countryOfOrigin: new FormControl('', [Validators.required,Validators.minLength(3),
      Validators.maxLength(20)]),
    brandName: new FormControl('', [Validators.required,Validators.minLength(3),
      Validators.maxLength(20)]),
    price: new FormControl('', [Validators.required]),
    discountPercentage: new FormControl('', [Validators.required,]),
    category: new FormControl('', [Validators.required]),
    keywords: new FormControl([], [Validators.required]),
    images: new FormControl([], [Validators.required]),
    stock: new FormControl('', [Validators.required]),
  });

  onSubmit(productData: any) {
    console.log(productData);
  }
  productID!: string;
  images: any = {};
  product!: any;
  isLoading = true;
  ngOnInit() {
    this.productID = this.route.snapshot.params['product_ID'];
    if (this.productID !== 'add') {
      this.productsService.getOneProduct(this.productID).subscribe({
        next: (data: any) => {
          this.product = data;
          this.formGroup.get('_id')?.patchValue(data._id);
          this.formGroup.get('name')?.patchValue(data.name);
          this.formGroup.get('description')?.patchValue(data.description);
          this.formGroup.get('modelNumber')?.patchValue(data.modelNumber);
          this.formGroup.get('manufacturer')?.patchValue(data.manufacturer);
          this.formGroup.get('images')?.patchValue(data.images);
          this.formGroup
            .get('countryOfOrigin')
            ?.patchValue(data.countryOfOrigin);
          this.formGroup.get('brandName')?.patchValue(data.brandName);
          this.formGroup.get('category')?.patchValue(data.category.name);
          this.formGroup.get('price')?.patchValue(data.price);
          this.formGroup.get('stock')?.patchValue(data.stock);
          this.formGroup
            .get('discountPercentage')
            ?.patchValue(data.discountPercentage);
          this.formGroup.get('keywords')?.patchValue(data.keywords);
          this.product._images = {
            img1: {
              file: null,
              url:
                this.product.images[0]?.url === undefined
                  ? null
                  : `url(${this.product.images[0]?.url})`,
            },
            img2: {
              file: null,
              url:
                this.product.images[1]?.url === undefined
                  ? null
                  : `url(${this.product.images[1]?.url})`,
            },
            img3: {
              file: null,
              url:
                this.product.images[2]?.url === undefined
                  ? null
                  : `url(${this.product.images[2]?.url})`,
            },
            img4: {
              file: null,
              url:
                this.product.images[3]?.url === undefined
                  ? null
                  : `url(${this.product.images[3]?.url})`,
            },
            img5: {
              file: null,
              url:
                this.product.images[4]?.url === undefined
                  ? null
                  : `url(${this.product.images[4]?.url})`,
            },
            img6: {
              file: null,
              url:
                this.product.images[5]?.url === undefined
                  ? null
                  : `url(${this.product.images[5]?.url})`,
            },
          };
        },
      });
      this.isLoading = false;
    } else {
      this.product = {};
      this.product._images = [];
      this.formGroup.get('_id')?.disable();
      this.formGroup.get('name')?.patchValue('New Product Name');
      this.formGroup.get('description')?.patchValue('New Product Description');
      this.formGroup.get('modelNumber')?.patchValue('New Model Number');
      this.formGroup
        .get('manufacturer')
        ?.patchValue('New Product Manufacturer');
      this.formGroup.get('images')?.patchValue([]);
      this.formGroup
        .get('countryOfOrigin')
        ?.patchValue('New Country Of Origin');
      this.formGroup.get('brandName')?.patchValue('New Brand Name');
      this.formGroup.get('price')?.patchValue('0');
      this.formGroup.get('category')?.patchValue('Headphones');
      this.formGroup.get('stock')?.patchValue('0');
      this.formGroup.get('discountPercentage')?.patchValue('0');
      this.formGroup.get('keywords')?.patchValue([]);
      this.product._images = {
        img1: {
          file: null,
          url: null,
        },
        img2: {
          file: null,
          url: null,
        },
        img3: {
          file: null,
          url: null,
        },
        img4: {
          file: null,
          url: null,
        },
        img5: {
          file: null,
          url: null,
        },
        img6: {
          file: null,
          url: null,
        },
      };
      this.isLoading = false;
    }
  }

  onFileSelected(event: any, key: string) {
    console.log('hi');
    const file = event.target.files[0];
    this.images[key] = file;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.product._images[key].url = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
  }
  handleConfirmation() {}
  handlePromptConfirm() {
    if (this.productID !== 'add') {
      this.productsService
        .editProduct(this.productID, { ...this.formGroup.value }, this.images)
        .subscribe({
          next(x) {
            console.log(x);
          },
          error(x) {
            console.log(x);
          },
        });
    } else {
      this.productsService
        .createProduct(this.formGroup.value, this.images)
        .subscribe({
          next(x) {
            console.log(x);
          },
          error(x) {
            console.log(x);
          },
        });
    }
  }
}
