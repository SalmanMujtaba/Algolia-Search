import { Component, OnInit } from '@angular/core';

import { APP_CONSTANTS } from './../../constants/app-constants';
import { ApiServiceService } from './../../services/api-service.service';
import { DialogComponent } from './../dialog/dialog.component';
import { Hit } from 'angular-instantsearch/instantsearch/instantsearch';
import { MatDialog } from '@angular/material/dialog';
import { SpinnerService } from './../../services/spinner.service';

@Component({
  selector: 'app-hits',
  templateUrl: './hits.component.html',
  styleUrls: ['./hits.component.scss']
})
export class HitsComponent implements OnInit {
  reviews: string;
  current: Hit | null;
  deletedIDs: Array<string> = [];
  constructor(public dialog: MatDialog, protected apiService: ApiServiceService, protected spinnerService: SpinnerService) {
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

  delete(hit: Hit, allHits: Hit[]): void {
    this.current = hit;

    let dialog = this.dialog.open(DialogComponent, {
      // width: '250px',
      data: {
        hit,
        isRemove: true,
        title: "Are you sure you want to delete this restaurant",
        content: ""
      }
    });
    dialog.afterClosed().subscribe(result => {
      if (result && result === APP_CONSTANTS.get("DELETE_RESTAURANT")) {
        this.apiService.deleteObject(this.current!.objectID).subscribe({
          next: (v) => this.remove(allHits),
          error: (e) => console.error(e),
          complete: () => { this.spinnerService.hideSpinner(); this.deletedIDs.push(this.current!.objectID); }
        });
      }
    }
    );
  }

  remove(allHits: Hit[]) {
    allHits = allHits.filter((hit: Hit) => hit.objectID !== this.current!.objectID);
    console.log(allHits);
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
