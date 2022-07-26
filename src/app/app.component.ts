import { apiKey, appName } from './../environments/environment';

import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'algolia';
  config: any;
  showSpinner: boolean = false;

  constructor() {
    this.config = {
      indexName: 'restaurants',
      searchClient: algoliasearch(
        appName,
        apiKey
      )
    }



    // const objects = [{
    //   firstname: 'Jimmie',
    //   lastname: 'Barninger',
    //   objectID: 'myID1'
    // }, {
    //   firstname: 'Warren',
    //   lastname: 'Speach',
    //   objectID: 'myID2'
    // }];

    // index.saveObjects(objects).then((objectIDs: any) => {
    //   console.log(objectIDs);
    // });
    // const index = client.initIndex('restaurants2');
    // this.http.get<any>('https://raw.githubusercontent.com/Jerska/front-end-test/master/dataset/restaurants.json').subscribe(data => {
    //   console.log(data);
    //   index.saveObjects(data, {
    //     autoGenerateObjectIDIfNotExist: true
    //   });
    // }
    // );

    // fetch('https://alg.li/doc-ecommerce.json')
    //   .then(function(response) {
    //     return response.json()
    //   })
    //   .then(function(products) {
    //     return index.saveObjects(products, {
    //       autoGenerateObjectIDIfNotExist: true
    //     })
    //   })

  }
}
