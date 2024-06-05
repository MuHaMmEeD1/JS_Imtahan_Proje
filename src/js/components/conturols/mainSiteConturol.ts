import { MainSiteModel } from "../models/mainSiteModel";
import { MainSiteView } from "../views/mainSiteView";

export class MainSiteConturol {
  mainSiteView: MainSiteView;
  mainSiteModel: MainSiteModel;

  constructor() {
    this.mainSiteModel = new MainSiteModel();
    this.mainSiteView = new MainSiteView();
  }
}
