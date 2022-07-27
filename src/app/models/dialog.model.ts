import { AlgoliaRecord } from "./hits.model";

export interface DialogData {
  hit?: AlgoliaRecord;
  title: string;
  isAdd?: boolean;
  isRemove?: boolean;
  content: string
}