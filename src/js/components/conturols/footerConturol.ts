import { FooterView } from "./../views/footerView";
import { FooterModel } from "./../models/footerModel";
export class FooterConturol {
  footerModel: FooterModel;
  footerView: FooterView;

  constructor() {
    this.footerModel = new FooterModel();
    this.footerView = new FooterView();
  }
}
