import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { APP_CONSTANTS } from './../../constants/app-constants';
import { DialogData } from './../../models/dialog.model';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  deleteArgument: string = APP_CONSTANTS.get("DELETE_RESTAURANT") as string;
  addArgument: string = APP_CONSTANTS.get("ADD_RESTAURANT") as string;
  cancelArgument: string = APP_CONSTANTS.get("CANCEL_RESTAURANT") as string;
  addButtonLabel: string = APP_CONSTANTS.get("ADD_BUTTON_LABEL") as string;
  cancelButtonLabel: string = APP_CONSTANTS.get("CANCEL_BUTTON_LABEL") as string;
  deleteButtonLabel: string = APP_CONSTANTS.get("DELETE_BUTTON_LABEL") as string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, protected dialogRef: MatDialogRef<DialogComponent>) {
  }

  ngOnInit(): void {

  }

  close(action: string) {
    this.dialogRef.close(action);
  }
}