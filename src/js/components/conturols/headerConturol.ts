import { HeaderModel } from "./../models/headerModel";
import { HeaderView } from "./../views/headerView";

export class HeaderConturol {
  headerView: HeaderView;
  HeaderModel: HeaderModel;

  constructor() {
    this.headerView = new HeaderView();
    this.HeaderModel = new HeaderModel();
  }

  addEvent(openShop: (check: boolean) => void) {
    this.headerView.addEvent(openShop);
  }
}
