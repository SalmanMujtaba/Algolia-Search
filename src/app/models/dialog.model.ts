import { Hits } from "./hits.model";

export interface DialogData {
  hit?: Hits;
  title: string;
  isAdd?: boolean;
  isRemove?: boolean;
  content: string
}