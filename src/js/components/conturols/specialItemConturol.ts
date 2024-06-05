import { SpecialItemView } from "./../views/specialItemView";
import { SpecialItemModel } from "./../models/specialItemModel";
export class SpecialItemCounturol {
  specialItemModel: SpecialItemModel;
  specialItemView: SpecialItemView;

  constructor() {
    this.specialItemModel = new SpecialItemModel();
    this.specialItemView = new SpecialItemView();
  }
}
