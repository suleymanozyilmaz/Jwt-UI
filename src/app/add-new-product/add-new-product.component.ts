import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../_model/product.model';
import { ProductService } from '../_services/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {

  product: Product = {
    productName:"",
    productDescription:"",
    productActualPrice:0,
    productDiscountedPrice:0
  }

  constructor(private productService:ProductService){}

  addProduct(productForm:NgForm){
   
    this.productService.addProduct(this.product).subscribe(
      (response:Product) =>{
        productForm.reset();
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );

  }

}
