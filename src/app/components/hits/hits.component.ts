import { Component, OnInit } from '@angular/core';

import { DialogComponent } from './../dialog/dialog.component';
import { Hit } from 'angular-instantsearch/instantsearch/instantsearch';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-hits',
  templateUrl: './hits.component.html',
  styleUrls: ['./hits.component.scss']
})
export class HitsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  add(event: Hit) {
    console.log(event);
    let dialog = this.dialog.open(DialogComponent, {
      // width: '250px',
      data: {
        hit: event
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
