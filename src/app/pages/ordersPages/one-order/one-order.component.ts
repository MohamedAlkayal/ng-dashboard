import { Component } from '@angular/core';
import { CardPromptComponent } from '../../../components/cardComponents/card-prompt/card-prompt.component';
import { InputComponent } from '../../../components/formComponents/input/input.component';
import { InputTextareaComponent } from '../../../components/formComponents/input-textarea/input-textarea.component';
import { InputTwoFieldsComponent } from '../../../components/formComponents/input-two-fields/input-two-fields.component';
import { InputKeywordsComponent } from '../../../components/formComponents/input-keywords/input-keywords.component';
import { CardCtaComponent } from '../../../components/cardComponents/card-cta/card-cta.component';
import { InputInnerLableComponent } from '../../../components/formComponents/input-inner-lable/input-inner-lable.component';
import { AdminOrdersService } from '../../../services/admin-orders.service';
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
  ],
  providers: [AdminOrdersService],
  templateUrl: './one-order.component.html',
  styleUrl: './one-order.component.css',
})
export class OneOrderComponent {
  constructor(private ordersService: AdminOrdersService) {}

  order!: any;

  ngOnInit() {
    this.ordersService.getOne('65df823f0b373b309837b70a').subscribe({
      next: (data) => {},
      error: (err) => console.log(err),
    });
  }
}
