import { Component, OnInit } from '@angular/core';

import { APP_CONSTANTS } from './../../constants/app-constants';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  placeholder: string;
  constructor() {
    this.placeholder = APP_CONSTANTS.get("SEARCH_BOX_PLACEHOLDER") as string;
  }

  ngOnInit(): void {
  }

}
