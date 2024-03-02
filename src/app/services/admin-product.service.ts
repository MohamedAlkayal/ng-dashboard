import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TokenUtilsService } from './token/token-utils.service';

@Injectable({
  providedIn: 'root',
})
export class AdminProductService {
  private productsUrl = 'http://localhost:8000/api/dashboard/products';

  constructor(private http: HttpClient, private token: TokenUtilsService) {}

  createProduct(productDetails: any, productImages: any) {
    const formData = new FormData();
    const headers = this.token.getHeader();
    console.log(productDetails);

    const productData = JSON.stringify(productDetails);
    // Append productImage (file) to formData

    formData.append('productData', productData);

    for (const key in productImages) {
      formData.append(key, productImages[key]);
    }

    // Send HTTP POST request with formData
    return this.http.post(this.productsUrl, formData, { headers: headers });
  }
  getAllProducts(
    page: number = 1,
    limit: number = 10,
    sortBy?: string,
    order?: string,
    id_modelNumber?: string,
    name?: string,
    brandName?: string,
    category?: string,
    subCategory?: string,
    val1?: number,
    val2?: number
  ) {
    const headers = this.token.getHeader();
    let url = `${this.productsUrl}?page=${page}&limit=${limit}`;
    if (id_modelNumber) {
      url += `&id_modelNumber=${id_modelNumber}`;
    }
    if (name) {
      url += `&name=${name}`;
    }
    if (brandName) {
      url += `&brandName=${brandName}`;
    }
    if (category) {
      url += `&category=${category}`;
    }
    if (subCategory) {
      url += `&subCategory=${subCategory}`;
    }
    if (val1 && val2) {
      url += `&val1=${val1}&val2=${val2}`;
    }
    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }
    if (order) {
      url += `&order=${order}`;
    }
    return this.http.get(url, { headers: headers });
  }
  getOneProduct(id: string) {
    const headers = this.token.getHeader();
    return this.http.get(this.productsUrl + `/${id}`, { headers: headers });
  }
  editProduct(id: string, productDetails: any, productImages: any) {
    const formData = new FormData();
    const headers = this.token.getHeader();
    const myProductDetails = { ...productDetails };
    delete myProductDetails.stock;
    delete myProductDetails._id;

    console.log(myProductDetails);

    const productData = JSON.stringify(myProductDetails);

    formData.append('productData', productData);

    for (const key in productImages) {
      formData.append(key, productImages[key]);
    }

    return this.http.patch(this.productsUrl + `/update/${id}`, formData, {
      headers: headers,
    });
  }
  freezeProducts(idArray: string[]) {
    const headers = this.token.getHeader();
    const payload = { productIds: idArray };
    return this.http.patch(this.productsUrl + `/freeze`, payload, {
      headers: headers,
    });
  }
  unFreezeProducts(idArray: string[]) {
    const headers = this.token.getHeader();
    const payload = { productIds: idArray };
    return this.http.patch(this.productsUrl + `/unfreeze`, payload, {
      headers: headers,
    });
  }
  addTicketToProducts(idArray: string[]) {
    const headers = this.token.getHeader();
    const payload = { productIds: idArray };

    return this.http.post(this.productsUrl + `/ticket`, payload, {
      headers: headers,
    });
  }

  deleteProducts(idArray: string[]) {
    const headers = this.token.getHeader();
    const payload = { productIds: idArray };

    return this.http.put(this.productsUrl, payload, {
      headers: headers,
    });
  }

  deleteOneProduct(id: string) {
    const headers = this.token.getHeader();
    const payload = { productIds: [id] };

    return this.http.put(this.productsUrl, payload, {
      headers: headers,
    });
  }
  addTicket(
    ticketTitle: string,
    ticketDescription: string,
    item_ids: string[]
  ) {
    const headers = this.token.getHeader();
    return this.http.post(
      this.productsUrl + `/ticket`,
      { title: ticketTitle, description: ticketDescription, item_ids },
      { headers: headers }
    );
  }
}
