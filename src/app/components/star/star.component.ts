import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() rating: number;
  @ViewChild('star', { static: true }) star: any;
  stars: any;
  constructor(protected sanitizer: DomSanitizer) {
    this.rating = 0;
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.rating = changes["rating"]?.currentValue ?? 0;
      this.stars = this.sanitizer.bypassSecurityTrustStyle('--star-width:' + this.rating * 20 + '%')
    }
  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
  }

}
