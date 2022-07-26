import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-instant-search',
  templateUrl: './instant-search.component.html',
  styleUrls: ['./instant-search.component.scss']
})
export class InstantSearchComponent implements OnInit {
  @Input() config: any;
  @Output() toggleSpinner = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleSpinnerMethod(toggle: any) {
    this.toggleSpinner.emit(toggle);
  }
}
