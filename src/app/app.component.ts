import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { algoliaApiKey, algoliaAppName } from './../environments/environment';

import { SpinnerService } from './services/spinner.service';
import algoliasearch from 'algoliasearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'algolia';
  config: any;
  showSpinner: boolean = false;
  showTopButton: boolean = true;
  private readonly destroy$ = new Subject();

  constructor(protected spinnerService: SpinnerService) {
    this.config = {
      indexName: 'restaurants',
      searchClient: algoliasearch(
        algoliaAppName,
        algoliaApiKey
      )
    };


  }
  ngOnInit(): void {
    this.spinnerService
      .getSpinner()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (showSpinner: boolean) => {
          this.showSpinner = showSpinner;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  showToggleButton(event: boolean) {
    this.showTopButton = event;
  }


}
