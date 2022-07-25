import { Observable, of } from 'rxjs';
import { apiKey, appName } from './../../environments/environment';

import { APP_CONSTANTS } from './../constants/app-constants';
import { Injectable } from '@angular/core';
import algoliasearch from 'algoliasearch';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  index: any;
  constructor() {
    this.index = algoliasearch(appName, apiKey)?.initIndex(APP_CONSTANTS.get("INDEX_NAME") as string);
  }

  saveObject(object: any) {
    console.log(object);
  }

  deleteObject(objectID: string): Observable<any> {
    if (objectID) {
      return of(this.index.deleteObject(objectID).wait());

    }
    return of("Object ID is empty");
  }
}
