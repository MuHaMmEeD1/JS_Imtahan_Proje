import { Product } from "../../types";

export class ShopModel {
  products: Product[];

  constructor() {
    this.products = [];
  }

  getProducts() {
    this.products = JSON.parse(localStorage.getItem("productsBuys") as string);
    console.dir(this.products);
  }

  deleteProduct(title: string) {
    this.products.forEach((e, i) => {
      if (e.title == title) {
        if (e.quantity == 1) {
          this.products.splice(i, 1);
        } else {
          e.quantity -= 1;
        }
      }
    });

    localStorage.setItem("productsBuys", JSON.stringify(this.products));
    this.products = JSON.parse(localStorage.getItem("productsBuys") as string);
  }
}
