import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

import { ProductsService } from '../../services/products.service';
import { UserService } from '../../services/user.service';
import { Product } from '../../shared/product';

import { UpdateDialogComponent } from '../../dialogs/update-dialog/update-dialog.component';
import { DeleteDialogComponent } from '../../dialogs/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-modal-content',
  template: `
  <div class="modal-header text-center">
      <h5 class="modal-title w-100">{{prod.name}} ל{{prod.gender}} </h5>
      <button type="button" class="close xBTN" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
      </button>
  </div>
  <div class="modal-body">
    <img class="img-responsive" src="{{prod.image}}"  alt="product image" style="max-width: 100%;height:400px"> 
  </div>
  <div class="modal-footer">
    <p>{{prod.ml}} מ"ל</p>
  </div>
  `
})
export class NgbdModalContent {
  @Input() prod : any;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input() products: any;

  filter: Product = new Product();
  constructor(private productsService: ProductsService,
              private userService: UserService,
              private router: Router,
              private modalService: NgbModal,
              private dialog: MatDialog, 
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  isUserIsAdmin(){
    return this.userService.getPremission() == "admin";
  }

  isUserIsAgents(){
    return this.userService.getPremission() == "agent";
  }
  
  show(product){
    const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.prod = product;
  }
  
  update(product){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.direction = "rtl";
    const dialogRef = this.dialog.open(UpdateDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => {
        if(data)        
          this.router.navigate(['updateProduct', product._id]);                    
      });  
  }

  delete(product){ 

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.direction = "rtl";
    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(
      data => {
        if(data)        
        {
          this.productsService.deleteProduct(product).subscribe(
            data => {
            let config = new MatSnackBarConfig();
            config.duration = 2000;
            config.panelClass = ['green-snackbar']
            this.snackBar.open("מוצר נמחק בהצלחה", "", config);
            var index = this.products.indexOf(product);
            this.products.splice(index, 1);
            },
            err => {
              let config = new MatSnackBarConfig();
              config.duration = 2000;
              config.panelClass = ['red-snackbar']
              this.snackBar.open("מחיקת מוצר נכשלה", "", config);
            });
        }                    
      });   
  }
}