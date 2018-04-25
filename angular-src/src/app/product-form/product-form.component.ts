import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  @Input() productsToUpdate : any;
  @Input() operation : string;
  
  myForm : FormGroup;
  itemName : FormControl;
  category: FormControl;
  gender: FormControl;
  status: FormControl;
  price: FormControl;
  amount: FormControl;
  image: FormControl;

  constructor(private productsService: ProductsService, private builder: FormBuilder) { }

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
    // const a: FormGroup = null;
    // a.get('name') as FormControl
  }

  // getControl(name: string): FormControl {
  //   return a.get(name) as FormControl
  // }

  createFormControls() { 

    if(this.productsToUpdate){
      this.itemName = new FormControl(this.productsToUpdate.name, Validators.required);
      this.category = new FormControl(this.productsToUpdate.category, Validators.required);
      this.gender = new FormControl(this.productsToUpdate.gender, Validators.required);
      this.status = new FormControl(this.productsToUpdate.status, Validators.required);
      this.price = new FormControl(this.productsToUpdate.price, [
        Validators.required,
        Validators.pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
      ]);
      this.amount = new FormControl(this.productsToUpdate.ml, [
        Validators.required,
        Validators.pattern("^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$")
      ]);
      this.image = new FormControl(this.productsToUpdate.image, Validators.required);
    }
    else{
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
      this.image = new FormControl('', Validators.required);      
    }
  }

  createForm() { 
    this.myForm = new FormGroup({
      itemName : this.itemName,
      category: this.category,
      gender: this.gender,
      status: this.status,
      price: this.price,
      amount: this.amount,
      image: this.image
    });
  }

  onSubmit() {
    switch(this.operation){
      case "update" :{
        
        
        let productToUpdate = {
          _id : this.productsToUpdate._id,
          name : this.itemName.value,
          gender : this.gender.value,
          category : this.category.value,
          price : this.price.value, 
          status : this.status.value,
          ml : this.amount.value,
          image : this.image.value};
    
    


        
        
        this.productsService.updateProduct(productToUpdate).subscribe(
          data => {console.log("update")},
          err => console.error(err));
        break;
      }
      case "create" :{
        let newProduct = {
          name : this.itemName.value,
          gender : this.gender.value,
          category : this.category.value,
          price : this.price.value, 
          status : this.status.value,
          ml : this.amount.value,
          image : this.image.value};
    
        this.productsService.createProduct(newProduct).subscribe(
          data => {console.log("create")},
          err => console.error(err));
        break;
      }
      default:{
        //Add error massage
        console.log(this.operation);
        break;
      }
    }
  }

}
