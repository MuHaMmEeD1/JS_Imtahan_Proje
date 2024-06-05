import { ShopView } from "./../views/shopView";
import { ShopModel } from "./../models/shopModel";
export class ShopConturol {
  shopModel: ShopModel;
  shopView: ShopView;

  constructor() {
    this.shopModel = new ShopModel();
    this.shopView = new ShopView();
    this.showProducts();
    this.addEvent();
  }

  async showProducts() {
    await this.shopModel.getProducts();
    await this.shopView.showProducts(this.shopModel.products);
  }
  async showAddProducts() {
    await this.shopView.showProducts(this.shopModel.products);
  }

  openCloseShow(check: boolean) {
    if (this.shopView.opened) {
      this.shopView.mainDivShop.classList.remove("mainDivShop_OpenEvent");
    } else {
      this.shopView.mainDivShop.classList.add("mainDivShop_OpenEvent");
    }
    this.shopView.opened = !this.shopView.opened;

    if (check) {
      this.showProducts();
    }
  }

  delteProduct(titel: string) {
    this.shopModel.deleteProduct(titel);
    this.showProducts();
  }

  addEvent() {
    this.shopView.addEvent(
      this.delteProduct.bind(this),
      this.openCloseShow.bind(this)
    );
  }
}
