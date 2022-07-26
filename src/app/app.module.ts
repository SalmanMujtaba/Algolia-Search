import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
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
    SpinnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    NgAisInstantSearchModule.forRoot(),
    NgaisModule,
    MaterialModule
    // MatButtonModule,
    // MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
