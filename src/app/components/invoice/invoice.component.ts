import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent {
  @Input() lable!: string;
  @Input() list: { id: string; name: string; price: number }[] = [
    { id: '1512534hvgnb', name: 'Kayal', price: 100 },
    { id: '2jhnbvghfhvg', name: 'Ehab', price: 100 },
    { id: '3jgbvgfhgggg', name: 'Deko', price: 100 },
  ];

  @Input() invoce: {
    items: number;
    total: number;
    subtotal: number;
    vouchersdiscount: number;
    tax: number;
  } = { items: 5, total: 1000, subtotal: 1200, vouchersdiscount: 200, tax: 24 };

  @Input() _invoice!: any;
  @Input() order!: any;

  ngOnInit() {
    this._invoice.quantity = 0;
    this._invoice.map((i: any) => (this._invoice.quantity += i.quantity));
    this.order.tax = Math.floor(this.order.finalPrice * 0.14);
    this.order.discount = -10;
    console.log(this._invoice.quantity);
    console.log(this._invoice);
  }
}
