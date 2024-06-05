import { BrandItemsView } from "./../views/brandItemsView";
import { BrandItemsModel } from "./../models/brandItemsModel";
export class BrandItemsConturol {
  brandItemsModel: BrandItemsModel;
  brandItemsView: BrandItemsView;

  constructor() {
    this.brandItemsModel = new BrandItemsModel();
    this.brandItemsView = new BrandItemsView();
  }
}
