import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from './components/dialog/dialog.component';
import { HitsComponent } from './components/hits/hits.component';
import { HttpClientModule } from '@angular/common/http';
import { InstantSearchComponent } from './components/instant-search/instant-search.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';
import { MaterialModule } from './modules/material.module';
import { NgAisInstantSearchModule } from 'angular-instantsearch';
import { NgModule } from '@angular/core';
import { NgaisModule } from './modules/ngais.module';
import { RefinementsComponent } from './components/refinements/refinements.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { StarComponent } from './components/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    RefinementsComponent,
    HitsComponent,
    StarComponent,
    InstantSearchComponent,
    LoadingIndicatorComponent,
    DialogComponent

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
