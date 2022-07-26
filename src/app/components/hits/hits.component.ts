import { Component, OnInit } from '@angular/core';

import { APP_CONSTANTS } from './../../constants/app-constants';
import { ApiServiceService } from './../../services/api-service.service';
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
  current: Hit | null;

  constructor(public dialog: MatDialog, protected apiService: ApiServiceService) {
    this.reviews = APP_CONSTANTS.get("REVIEWS_LABEL") as string;
    this.current = null;
  }

  ngOnInit(): void {
  }

  add(event: Hit) {
    this.current = event;
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
    this.current = event;
    let dialog = this.dialog.open(DialogComponent, {
      // width: '250px',
      data: {
        hit: event,
        isRemove: true,
        title: "Are you sure you want to delete this restaurant",
        content: ""
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result && result === APP_CONSTANTS.get("DELETE_RESTAURANT")) {
        this.apiService.deleteObject(this.current!.objectID).subscribe({
          next: (v) => console.log(v),
          error: (e) => console.error(e),
          complete: () => console.info('complete')
        });
      }
    }
    );
  }

  trackByIdentity(index: number, item: Hit): number {
    return +item.objectID;
  }

  transformData(items: Array<Hit>) {
    return items.map(item => {
      return {
        ...item,
        ...{
          rating: item["stars_count"]?.toFixed(0),
        }
      };
    });

  }
}
