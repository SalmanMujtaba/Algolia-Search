import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-instant-search',
  templateUrl: './instant-search.component.html',
  styleUrls: ['./instant-search.component.scss']
})
export class InstantSearchComponent implements OnInit, AfterViewInit {
  @Input() config: any;
  @Output() toggleSpinner = new EventEmitter<boolean>();
  constructor(@Inject(DOCUMENT) private document: Document) { }


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.document.getElementsByClassName("ais-SearchBox")[0].classList.add("animate__animated", "animate__bounce");

  }
  add() {
  }
}
