import axios from "axios";
import { Product } from "./../../types/index";

export class NewStyleItemsModel {
  response: any;
  products: Product[];
  buyProducts: Product[];

  constructor() {
    this.products = [];
    this.buyProducts = JSON.parse(
      localStorage.getItem("productsBuys") as string
    );
  }

  async getProducts(typeIndex: number = -1) {
    const praductTitles: string[] = [];

    this.products.splice(0, this.products.length);
    this.response = await axios.get("../db.json");

    this.buyProducts = JSON.parse(
      localStorage.getItem("productsBuys") as string
    );

    let breakCheck = 0;

    for (let i = 0; i < 8; i += 1) {
      let randomNum = Math.floor(Math.random() * 6);
      if (typeIndex != -1) {
        randomNum = typeIndex;
      }
      let selectProduct: Product[] = [];

      switch (randomNum) {
        case 0:
          selectProduct = this.response.data.Products.bags;
          break;
        case 1:
          selectProduct = this.response.data.Products.hoodies;
          break;
        case 2:
          selectProduct = this.response.data.Products.jacets;
          break;
        case 3:
          selectProduct = this.response.data.Products.shoes;
          break;
        case 4:
          selectProduct = this.response.data.Products.t_shirts;
          break;
        case 5:
          selectProduct = this.response.data.Products.bags;
          break;
      }

      randomNum = Math.floor(Math.random() * selectProduct.length);

      console.log("bolge 1 ok", i);

      if (!praductTitles.includes(selectProduct[randomNum].title)) {
        let checkOk = true;

        console.log("bolge 2 ok", i);

        this.buyProducts.forEach((buyE) => {
          if (buyE.title == selectProduct[randomNum].title) {
            if (selectProduct[randomNum].quantity - buyE.quantity == 0) {
              checkOk = false;
            }
          }
        });

        console.log("bolge 3 ok", i);

        if (checkOk) {
          praductTitles.push(selectProduct[randomNum].title);
          this.products.push(selectProduct[randomNum]);
          console.log("bolge ---(4)--- ok", i, this.products.length);

          breakCheck = 0;
        } else {
          console.log("bolge 5 ok", i);

          i -= 1;
        }
      } else {
        breakCheck += 1;

        console.log("bolge 6 ok", i, breakCheck);

        if (breakCheck == 2000) {
          console.log("bolge 7 ok", i);

          break;
        }
        console.log("bolge 8 ok", i);

        i -= 1;
      }
    }

    this.buyProducts.forEach((buyE) => {
      this.products.forEach((e) => {
        if (buyE.title == e.title) {
          e.quantity -= buyE.quantity;
        }
      });
    });

    console.dir(this.products);
  }

  addProductsLg(product: Product) {
    let workChek = true;

    this.buyProducts = JSON.parse(
      localStorage.getItem("productsBuys") as string
    );

    if (product.quantity) {
      for (let i = 0; i < this.buyProducts.length; i += 1) {
        if (product.title == this.buyProducts[i].title) {
          this.buyProducts[i].quantity += 1;
          localStorage.setItem(
            "productsBuys",
            JSON.stringify(this.buyProducts)
          );

          workChek = false;
          break;
        }
      }
      if (workChek) {
        product.quantity = 1;
        this.buyProducts.push(product);
        localStorage.setItem("productsBuys", JSON.stringify(this.buyProducts));
      }

      this.products.forEach((e) => {
        if (e.title == product.title) {
          e.quantity -= 1;
        }
      });
    }
  }
}
