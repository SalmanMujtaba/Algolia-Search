import { Observable, of } from 'rxjs';
import { algoliaApiKey, algoliaAppName, cloudApiKey, cloudName, cloudUnsignedPreset } from './../../environments/environment';

import { APP_CONSTANTS } from './../constants/app-constants';
import { FileResponse } from './../models/file-upload.model';
import { Hits } from './../models/hits.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerService } from './spinner.service';
import algoliasearch from 'algoliasearch';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  index: any;
  uploadURL: string;
  constructor(protected spinnerService: SpinnerService, protected http: HttpClient) {
    this.uploadURL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;
    this.index = algoliasearch(algoliaAppName, algoliaApiKey)?.initIndex(APP_CONSTANTS.get("INDEX_NAME") as string);
  }

  saveObject(algoliaRecord: Hits) {
    this.spinnerService.showSpinner();
    if (algoliaRecord && Object.keys(algoliaRecord).length > 0 && this.index) {
      return of(this.index.saveObject(algoliaRecord, {
        autoGenerateObjectIDIfNotExist: true
      }));
    }
    return of("Object is not valid");
  }

  deleteObject(objectID: string): Observable<any> {
    this.spinnerService.showSpinner();
    if (objectID && this.index) {
      return of(this.index.deleteObject(objectID));
    }
    return of("Object ID is empty");
  }

  uploadFile(file: any): Observable<FileResponse | string> {
    this.spinnerService.showSpinner();
    console.log(file);
    if (file) {
      return this.http.post<FileResponse>(this.uploadURL, { file, api_key: cloudApiKey, upload_preset: cloudUnsignedPreset });

    }
    return of("Error in uploading the file");
  }

}
