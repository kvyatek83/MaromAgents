import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CreateDialogComponent>) { }

  ngOnInit() {
  }

  reset() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(false);
  }
}
