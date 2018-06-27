import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

import { CreateDialogComponent } from '../../dialogs/create-dialog/create-dialog.component';

import { ProductsService } from '../../services/products.service';

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
  code: FormControl;
  company: FormControl;
  type: FormControl;

  constructor(private productsService: ProductsService,
              private builder: FormBuilder,
              private router: Router,
              private dialog: MatDialog, 
              private snackBar: MatSnackBar) { }

  Category: string[];
  Gender: string[];
  Status: string[]; 
  Companies: string[];
  Types: string[];

  isMakeup : boolean;
  isPerfume : boolean;


  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(){
    this.isPerfume = false;  
    this.isMakeup = false;

    this.createFormControls();
    this.createForm();

    this.Category = [
      'בושם',
      'איפור',
    ]
  
    this.Gender = [
      'אישה',
      'גבר',
    ]
  
    this.Status= [
      'זמין',
      'לא זמין',
    ]
    
    this.Companies = [
      'מייבלין', 
      'לוריאל', 
      'בורזואה', 
      'רבלון', 
      'מקס פקטור'
    ]
  
    this.Types = [
      'פנים', 
      'עיניים', 
      'שפתיים', 
      'כללי'
    ]
  }

  formByCategory(){
    switch(this.category.value){
      case "בושם":{
        this.buildPerfumeForm();
        break;
      }
      case "איפור":{
        this.buildMakeupForm();
        break;
      }
      default:{
        console.log("שגיאה בבחירת סוג מוצר");
        break;
      }
    }
  }

  buildPerfumeForm(){
    this.isPerfume = true;  
    this.isMakeup = false;
    this.gender.setValue('');
    this.company.setValue("אין");
    this.type.setValue("אין");
    
  }

  buildMakeupForm(){
    this.isMakeup = true;
    this.isPerfume = false;  
    this.gender.setValue("אישה");
    this.company.setValue('');
    this.type.setValue('');
  }

  createFormControls() { 

    if(this.productsToUpdate){
      if(this.productsToUpdate.category == "בושם"){
        this.isPerfume = true;  
        this.isMakeup = false;
      } else{
        this.isMakeup = true;
        this.isPerfume = false;  
      }
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
      this.code = new FormControl(this.productsToUpdate.productCode, Validators.required);
      this.company = new FormControl(this.productsToUpdate.company, Validators.required);
      this.type = new FormControl(this.productsToUpdate.family, Validators.required);
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
      this.code = new FormControl('', Validators.required);      
      this.company = new FormControl('', Validators.required);      
      this.type = new FormControl('', Validators.required);      
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
      image: this.image,
      code: this.code,
      company: this.company,
      type: this.type
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
          image : this.image.value,
          productCode : this.code.value,
          company : this.company.value,
          family : this.type.value};

        this.productsService.updateProduct(productToUpdate).subscribe(
          data => {
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            config.panelClass = ['green-snackbar']
            this.snackBar.open("מוצר עודכן בהצלחה", "", config);
            this.router.navigate(['/']);
          },
          err => {
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            config.panelClass = ['red-snackbar']
            this.snackBar.open("עדכון מוצר נכשל", "", config);
          });
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
          image : this.image.value,
          productCode : this.code.value,
          company : this.company.value,
          family : this.type.value};

        this.productsService.createProduct(newProduct).subscribe(
          data => {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.direction = "rtl";
            const dialogRef = this.dialog.open(CreateDialogComponent, dialogConfig);

            dialogRef.afterClosed().subscribe(
              data => {
              if(data){
                this.initializeForm();
              } else {
                this.router.navigate(['/']);
              }              
            }
          );},
          err => {
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            config.panelClass = ['red-snackbar']
            this.snackBar.open("יצירת מוצר נכשלה", "", config);
          });
        break;
      }
      default:{
        let config = new MatSnackBarConfig();
        config.duration = 2000;
        config.panelClass = ['red-snackbar']
        this.snackBar.open("שגיאה מוזרה מאוד", "", config);
        break;
      }
    }
  }

}
