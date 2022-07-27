
export interface AlgoliaRecord {
  name: string;
  address: string;
  image_url?: string;
  food_type: string;
  stars_count: number;
  reviews_count: number;
  price_range: string;
  rounded_stars_count: number;
  objectID?: string;
}