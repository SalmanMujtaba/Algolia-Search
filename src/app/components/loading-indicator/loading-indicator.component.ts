

import { Component, forwardRef, Inject, Optional } from '@angular/core'
import {
  NgAisIndex, NgAisInstantSearch, TypedBaseWidget
} from 'angular-instantsearch'
import connectSearchBox, {
  SearchBoxConnectorParams, SearchBoxWidgetDescription
} from 'instantsearch.js/es/connectors/search-box/connectSearchBox'

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent extends TypedBaseWidget<
SearchBoxWidgetDescription,
SearchBoxConnectorParams
> {

  public override  state: SearchBoxWidgetDescription['renderState'] = {
    clear(): void { },
    isSearchStalled: false,
    query: '',
    refine(value: string): void { },
  }

  // Rendering options
  constructor(
    @Inject(forwardRef(() => NgAisIndex))
    @Optional()
    public parentIndex: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchInstance: NgAisInstantSearch
  ) {
    super('SearchBox')
  }

  override ngOnInit() {
    this.createWidget(connectSearchBox, {
      // instance options
    })
    super.ngOnInit()
  }
}
