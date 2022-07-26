import { Observable, of } from 'rxjs';
import { apiKey, appName } from './../../environments/environment';

import { APP_CONSTANTS } from './../constants/app-constants';
import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.service';
import algoliasearch from 'algoliasearch';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  index: any;
  constructor(protected spinnerService: SpinnerService) {
    this.index = algoliasearch(appName, apiKey)?.initIndex(APP_CONSTANTS.get("INDEX_NAME") as string);
  }

  saveObject(object: any) {
    console.log(object);
  }

  deleteObject(objectID: string): Observable<any> {
    this.spinnerService.showSpinner();
    if (objectID && this.index) {
      return of(this.index.deleteObject(objectID));
    }
    return of("Object ID is empty");
  }

}
