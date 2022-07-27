import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CloudinaryModule } from '@cloudinary/ng';
import { DialogComponent } from './components/dialog/dialog.component';
import { HitsComponent } from './components/hits/hits.component';
import { HttpClientModule } from '@angular/common/http';
import { InstantSearchComponent } from './components/instant-search/instant-search.component';
import { MaterialModule } from './modules/material.module';
import { NgAisInstantSearchModule } from 'angular-instantsearch';
import { NgModule } from '@angular/core';
import { NgaisModule } from './modules/ngais.module';
import { RefinementsComponent } from './components/refinements/refinements.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { StarComponent } from './components/star/star.component';
import { StarRatingMenuComponent } from './components/star-rating-menu/star-rating-menu.component';

// const routes: Routes = [

//   {
//     path: 'restaurants',
//     component: InstantSearchComponent,
//     title: 'Algolia Restaurant Search',
//     children: [
//       {
//         path: 'add',
//         title: 'Algolia Restaurant Add', // child route path
//         component: AddRestaurantComponent, // child route component that the router renders
//       },
//     ]
//   },
//   {
//     path: "",
//     redirectTo: 'InstantSearchComponent',
//     pathMatch: 'full'
//   },
//   {
//     path: "**",
//     redirectTo: '/'
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    RefinementsComponent,
    HitsComponent,
    StarComponent,
    InstantSearchComponent,
    DialogComponent,
    StarRatingMenuComponent,
    StarRatingMenuComponent,
    SpinnerComponent,
    AddRestaurantComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    // MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgAisInstantSearchModule.forRoot(),
    NgaisModule,
    MaterialModule,
    CloudinaryModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  entryComponents: [DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
