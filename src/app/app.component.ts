import { apiKey, appName } from './../environments/environment';

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import algoliasearch from 'algoliasearch/lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'algolia';
  config: any;

  constructor(protected http: HttpClient) {
    this.config = {
      indexName: 'restaurants',
      searchClient: algoliasearch(
        appName,
        apiKey
      )
    };


    // const client = algoliasearch('P8CQL7R1C3', '5daaa435bfa32a00ec391ea62a1f5b90')

    // const index = client.initIndex('restaurants');
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

  navigateToTop() {

  }
}
