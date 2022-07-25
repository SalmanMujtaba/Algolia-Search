import {
  NgAisConfigureModule,
  NgAisCurrentRefinementsModule,
  NgAisHighlightModule,
  NgAisHitsModule,
  NgAisInfiniteHitsModule,
  NgAisMenuModule,
  NgAisPanelModule,
  NgAisRatingMenuModule,
  NgAisSearchBoxModule
} from 'angular-instantsearch';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    NgAisHitsModule,
    NgAisSearchBoxModule,
    NgAisCurrentRefinementsModule,
    NgAisConfigureModule,
    NgAisHighlightModule,
    NgAisInfiniteHitsModule,
    NgAisMenuModule,
    NgAisRatingMenuModule,
    NgAisRatingMenuModule,
    NgAisPanelModule]
})
export class NgaisModule { }
