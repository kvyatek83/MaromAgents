import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators  } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  Category: string[] = [
    'בושם',
    'איפור',
  ]

  Gender: string[] = [
    'נשים',
    'גברים',
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
    this.http.post('http://localhost:3000/item', {
              name : this.itemName.value,
              gender : this.gender.value,
              category : this.category.value,
              price : this.price.value, 
              status : this.status.value,
              ml : this.amount.value,
              image : "this.image" 
            }).subscribe(res => {
          if(res['errMsg'])
          {
            console.log(res['errMsg'])
          } else {
            console.log("yaaaaaaa")
            //TODO::move to catalog page...
          }
        });
  }

}
