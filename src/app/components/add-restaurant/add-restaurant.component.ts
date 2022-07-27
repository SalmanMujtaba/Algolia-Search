import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

import { APP_CONSTANTS } from './../../constants/app-constants';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  @Output() addEvent = new EventEmitter<number>();
  restaurantAddForm: FormGroup;
  rNameLabel: string = APP_CONSTANTS.get("RESTAURANT_NAME_LABEL") as string;
  rAddressLabel: string = APP_CONSTANTS.get("RESTAURANT_ADDRESS_LABEL") as string;
  rFoodTypeLabel: string = APP_CONSTANTS.get("RESTAURANT_FOOD_TYPE_LABEL") as string;
  rPriceLabel: string = APP_CONSTANTS.get("RESTAURANT_PRICE_LABEL") as string;
  rImageLabel: string = APP_CONSTANTS.get("RESTAURANT_IMAGE_LABEL") as string;
  rPriceUnder30: string = APP_CONSTANTS.get("RADIO_OPTION_LESS_30") as string;
  rPriceInBetween: string = APP_CONSTANTS.get("RADIO_OPTION_BW_31_AND_50") as string;
  rPriceOver50: string = APP_CONSTANTS.get("RADIO_OPTION_OVER_50") as string;
  rPriceLegend: string = APP_CONSTANTS.get("RESTAURANT_PRICE_LEGEND") as string;
  rNameErrorMsg: string = APP_CONSTANTS.get("NAME_REQUIRED_ERROR_MSG") as string;
  rAdddressErrorMsg: string = APP_CONSTANTS.get("ADDRESS_REQUIRED_ERROR_MSG") as string;
  rFoodTypeErrorMsg: string = APP_CONSTANTS.get("FOOD_TYPE_REQUIRED_ERROR_MSG") as string;
  rImageErrorMsg: string = APP_CONSTANTS.get("IMAGE_REQUIRED_ERROR_MSG") as string;
  rFoodTypeOptions: Array<string> = APP_CONSTANTS.get("FOOD_TYPE_OPTIONS") as Array<string>;
  // options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  constructor(private formBuilder: FormBuilder) {
    this.restaurantAddForm = this.formBuilder.group({
      'rAddressFormControl': new FormControl('', [Validators.required]),
      'rNameFormControl': new FormControl('', [Validators.required]),
      'rFoodTypeFormControl': new FormControl('', [Validators.required]),
      'rPriceFormControl': new FormControl(this.rPriceUnder30)
    });
  }

  ngOnInit() {
    this.filteredOptions = this.restaurantAddForm?.get("rFoodTypeFormControl")?.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.rFoodTypeOptions.filter(option => option.toLowerCase().includes(filterValue));
  }

  // add() {
  //   this.addEvent.emit(1);

  // }

  cancel() {
    this.addEvent.emit(1);

  }

  onSubmit(value: string) {
    this.restaurantAddForm.markAllAsTouched();
    if (this.restaurantAddForm.valid) {
      this.addEvent.emit(1);

    }
  }

  openDialog() {
  }

}
