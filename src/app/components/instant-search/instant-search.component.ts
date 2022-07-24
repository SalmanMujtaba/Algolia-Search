import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-instant-search',
  templateUrl: './instant-search.component.html',
  styleUrls: ['./instant-search.component.scss']
})
export class InstantSearchComponent implements OnInit {
  @Input() config: any;
  constructor() { }

  ngOnInit(): void {
  }

}
