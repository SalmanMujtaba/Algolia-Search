import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-instant-search',
  templateUrl: './instant-search.component.html',
  styleUrls: ['./instant-search.component.scss']
})
export class InstantSearchComponent implements OnInit, AfterViewInit {
  @Input() config: any;
  isOpen: boolean = false;
  isAdd: boolean = false;

  @Output() toggleTopButton = new EventEmitter<boolean>();
  constructor(@Inject(DOCUMENT) private document: Document) { }


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.document.getElementsByClassName("ais-SearchBox")[0].classList.add("animate__animated", "animate__bounce");

  }
  add() {
    this.isAdd = true;
    this.toggleMenu();
    this.toggleTopButton.emit(this.isOpen);
  }

  toggleMenu() {
    this.isOpen = !this.isOpen;
    // this.toggleTopButton.emit(this.isOpen);

  }

  addrestaurant(event: any) {
    this.isAdd = false;
    this.isOpen = false;
    this.toggleTopButton.emit(true);

  }
}
