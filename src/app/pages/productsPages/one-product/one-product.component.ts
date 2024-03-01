import { Component } from '@angular/core';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputTextareaComponent } from '../../../components/formComponents/input-textarea/input-textarea.component';
import { InputTwoFieldsComponent } from '../../../components/formComponents/input-two-fields/input-two-fields.component';
import { InputKeywordsComponent } from '../../../components/formComponents/input-keywords/input-keywords.component';
import { CardCtaComponent } from '../../../components/cardComponents/card-cta/card-cta.component';
import { MatIcon } from '@angular/material/icon';
import { AdminProductService } from '../../../services/admin-product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

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
    MatIcon,
    CommonModule,
  ],
  providers: [AdminProductService],
  templateUrl: './one-product.component.html',
  styleUrl: './one-product.component.css',
})
export class OneProductComponent {
  constructor(
    private productsService: AdminProductService,
    private route: ActivatedRoute
  ) {}

  productID!: string;
  product!: any;

  ngOnInit() {
    this.productID = this.route.snapshot.params['product_ID'];
    this.productsService.getOneProduct(this.productID).subscribe({
      next: (data) => {
        this.product = data;
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
  }

  onFileSelected(event: any, key: string) {
    console.log('hi');
    const file = event.target.files[0];
    this.product._images[key].file = file;
    console.log(this.product._images[key].file);
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.product._images[key].url = `url(${e.target.result})`;
    };
    reader.readAsDataURL(file);
  }
}
