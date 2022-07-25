import { Component, OnInit } from '@angular/core';

import { APP_CONSTANTS } from './../../constants/app-constants';
import { DialogComponent } from './../dialog/dialog.component';
import { Hit } from 'angular-instantsearch/instantsearch/instantsearch';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hits',
  templateUrl: './hits.component.html',
  styleUrls: ['./hits.component.scss']
})
export class HitsComponent implements OnInit {
  reviews: string;
  constructor(public dialog: MatDialog) {
    this.reviews = APP_CONSTANTS.get("REVIEWS_LABEL") as string;
  }

  ngOnInit(): void {
  }

  add(event: Hit) {
    console.log(event);
    let dialog = this.dialog.open(DialogComponent, {
      // width: '250px',
      data: {
        hit: event,
        isAdd: true,
        title: "Are you sure you want to add this item to the restaurants",
        content: ""
      }
    });
    dialog.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }
    );
  }

  delete(event: Hit) {
    console.log(event);
  }
}
