import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  myForm : FormGroup;
  itemName : FormControl;
  category: FormControl;
  gender: FormControl;
  status: FormControl;
  price: FormControl;
  amount: FormControl;

  constructor(private http: HttpClient, private productsService: ProductsService) { }

  Category: string[] = [
    'בושם',
    'איפור',
  ]

  Gender: string[] = [
    'אישה',
    'גבר',
  ]

  Status: string[] = [
    'זמין',
    'לא זמין',
  ]

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() { 
    this.itemName = new FormControl('', Validators.required);
    this.category = new FormControl('', Validators.required);
    this.gender = new FormControl('', Validators.required);
    this.status = new FormControl('', Validators.required);
    this.price = new FormControl('', [
      Validators.required,
      Validators.pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
    ]);
    this.amount = new FormControl('', [
      Validators.required,
      Validators.pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
    ]);
  }

  createForm() { 
    this.myForm = new FormGroup({
      itemName : this.itemName,
      category: this.category,
      gender: this.gender,
      status: this.status,
      price: this.price,
      amount: this.amount
    });
  }

  onSubmit() {
    let newProduct = {
      name : this.itemName.value,
      gender : this.gender.value,
      category : this.category.value,
      price : this.price.value, 
      status : this.status.value,
      ml : this.amount.value,
      image : "https://www.healthypawspetinsurance.com/Images/V3/DogAndPuppyInsurance/Dog_CTA_Desktop_HeroImage.jpg"};

    this.productsService.createProduct(newProduct).subscribe(
      data => {console.log("yesssssssssss")},
      err => console.error(err));
  }

}
