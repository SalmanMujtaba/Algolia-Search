import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  saveObject(object: any) {
    console.log(object);
  }

  deleteObject(object: any) {
    console.log(object);
  }
}
