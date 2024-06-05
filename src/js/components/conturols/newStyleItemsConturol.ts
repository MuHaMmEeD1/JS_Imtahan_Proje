import { NewStyleItemsView } from "./../views/newStyleItemsView";
import { NewStyleItemsModel } from "./../models/newStyleItemsModel";
import { Product } from "../../types";
export class NewStyleItemsConturol {
  newStyleItemsModel: NewStyleItemsModel;
  newStyleItemsView: NewStyleItemsView;

  addProductEvent = () => {};

  constructor() {
    this.newStyleItemsModel = new NewStyleItemsModel();
    this.newStyleItemsView = new NewStyleItemsView();
    this.showProducts();
    this.addEvent();
  }

  async showProducts() {
    await this.newStyleItemsModel.getProducts();
    await this.newStyleItemsView.showProducts(this.newStyleItemsModel.products);
  }

  addEvent() {
    this.newStyleItemsView.addEvent(
      this.productRefles.bind(this),
      this.addProductLG.bind(this)
    );
  }

  addEventInThis(event: () => void) {
    this.addProductEvent = event;
  }

  async productRefles(productRank: number) {
    await this.newStyleItemsModel.getProducts(productRank);
    await this.newStyleItemsView.showProducts(this.newStyleItemsModel.products);
  }

  async addProductLG(product: Product) {
    await this.newStyleItemsModel.addProductsLg(product);
    await this.newStyleItemsView.showProducts(this.newStyleItemsModel.products);
    this.addProductEvent();
  }
}
