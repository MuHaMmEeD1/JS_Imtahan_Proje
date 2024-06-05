import { BestSellersView } from "./../views/bestSellersView";
import { BestSellersModel } from "./../models/bestSellersModel";
import { Product } from "../../types";
export class BestSellersConturol {
  bestSellersModel: BestSellersModel;
  bestSellersView: BestSellersView;

  addProductEvent = () => {};
  constructor() {
    this.bestSellersModel = new BestSellersModel();
    this.bestSellersView = new BestSellersView();
    this.showProducts();
    this.addEvent();
  }

  async showProducts() {
    await this.bestSellersModel.getProducts();
    await this.bestSellersView.showProducts(this.bestSellersModel.products);
  }

  addEvent() {
    this.bestSellersView.addEvent(
      this.productRefles.bind(this),
      this.addProductLG.bind(this)
    );
  }

  addEventInThis(event: () => void) {
    this.addProductEvent = event;
  }

  async productRefles(productRank: number) {
    await this.bestSellersModel.getProducts(productRank);
    await this.bestSellersView.showProducts(this.bestSellersModel.products);
  }

  async addProductLG(product: Product) {
    await this.bestSellersModel.addProductsLg(product);
    await this.bestSellersView.showProducts(this.bestSellersModel.products);
    this.addProductEvent();
  }
}
