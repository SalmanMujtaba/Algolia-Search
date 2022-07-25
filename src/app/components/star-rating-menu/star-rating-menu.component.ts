import { Component, OnInit } from '@angular/core';

import { APP_CONSTANTS } from './../../constants/app-constants';

@Component({
  selector: 'app-star-rating-menu',
  templateUrl: './star-rating-menu.component.html',
  styleUrls: ['./star-rating-menu.component.scss']
})
export class StarRatingMenuComponent implements OnInit {
  label: string;
  constructor() {
    this.label = APP_CONSTANTS.get("STAR_RATING_LABEL") as string;
  }

  ngOnInit(): void {
  }

}
