import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRatingMenuComponent } from './star-rating-menu.component';

describe('StarRatingMenuComponent', () => {
  let component: StarRatingMenuComponent;
  let fixture: ComponentFixture<StarRatingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarRatingMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarRatingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
