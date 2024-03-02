import { Component } from '@angular/core';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputTextareaComponent } from '../../../components/formComponents/input-textarea/input-textarea.component';
import { InputTwoFieldsComponent } from '../../../components/formComponents/input-two-fields/input-two-fields.component';
import { InputKeywordsComponent } from '../../../components/formComponents/input-keywords/input-keywords.component';
import { CardCtaComponent } from '../../../components/cardComponents/card-cta/card-cta.component';
import { InputInnerLableComponent } from '../../../components/formComponents/input-inner-lable/input-inner-lable.component';
import { AdminOrdersService } from '../../../services/admin-orders.service';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from '../../../components/invoice/invoice.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-one-order',
  standalone: true,
  imports: [
    CardPromptComponent,
    InputComponent,
    InputTextareaComponent,
    InputTwoFieldsComponent,
    InputKeywordsComponent,
    CardCtaComponent,
    InputInnerLableComponent,
    CommonModule,
    InvoiceComponent,
    RouterModule,
    ReactiveFormsModule,
   
  ],
  providers: [AdminOrdersService],
  templateUrl: './one-order.component.html',
  styleUrl: './one-order.component.css',
})
export class OneOrderComponent {
  constructor(
    private ordersService: AdminOrdersService,
    private route: ActivatedRoute
  ) {}

  orderID!: string;
  order!: any;

  ngOnInit() {
    this.orderID = this.route.snapshot.params['order_ID'];
    this.ordersService.getOne(this.orderID).subscribe({
      next: (data: any) => {
        console.log(data);
        this.order = data.order;
        this.order.fullName =
          data.order.user.firstName + ' ' + data.order.user.lastName;
        this.order.user.email = this.order.user.email.toLowerCase();
      },
      error: (err) => console.log(err),
    });
  }
}
