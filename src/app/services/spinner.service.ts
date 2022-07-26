import { Injectable, OnDestroy } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService implements OnDestroy {
  spinner$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
  showSpinner() {
    this.spinner$.next(true);

  }

  hideSpinner() {
    this.spinner$.next(false);
  }

  ngOnDestroy(): void {
    this.spinner$.unsubscribe();
  }

}
