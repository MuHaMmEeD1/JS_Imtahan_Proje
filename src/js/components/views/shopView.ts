import { Product } from "../../types";

export class ShopView {
  mainDivShop: HTMLDivElement;
  titleH2: HTMLHeadingElement;
  productsUl: HTMLUListElement;

  buttonOpenClose: HTMLButtonElement;
  buttonOpenCloseImg: HTMLImageElement;
  opened = false;

  deleteProductEvent = (title: string) => {};
  openCloseEvent = (check: boolean) => {};

  constructor() {
    const body = document.querySelector("body");

    // create section
    this.mainDivShop = document.createElement("div");

    this.titleH2 = document.createElement("h2");

    this.productsUl = document.createElement("ul");
    this.buttonOpenClose = document.createElement("button");

    this.buttonOpenCloseImg = document.createElement("img");
    // create section__end
    //
    //
    // value transfer

    this.mainDivShop.classList.add("mainDivShop");

    this.titleH2.textContent = "Shop";
    this.titleH2.classList.add("mainDivShop__titleH2");

    this.productsUl.classList.add("mainDivShop__productsUl");

    this.buttonOpenClose.classList.add("mainDivShop__buttonOpenClose");

    this.buttonOpenCloseImg.src = "./src/images/additionaDesign/grayBag.png";
    this.buttonOpenCloseImg.alt = "grayBag";
    this.buttonOpenCloseImg.classList.add("mainDivShop__buttonOpenCloseImg");

    this.buttonOpenClose.addEventListener("click", (e) => {
      this.openCloseEvent(this.opened);
    });
    // value transfer__end
    //
    //
    // add html

    this.buttonOpenClose.insertAdjacentElement(
      "beforeend",
      this.buttonOpenCloseImg
    );

    this.mainDivShop.insertAdjacentElement("beforeend", this.titleH2);
    this.mainDivShop.insertAdjacentElement("beforeend", this.productsUl);
    this.mainDivShop.insertAdjacentElement("beforeend", this.buttonOpenClose);

    body?.insertAdjacentElement("beforeend", this.mainDivShop);

    // add html__end
  }

  showProducts(products: Product[]) {
    this.productsUl.innerHTML = "";

    products.forEach((e) => {
      // create section

      let li = document.createElement("li");

      let img = document.createElement("img");
      let imgDiv = document.createElement("div");
      let titel = document.createElement("h4");
      let typeDiscountPriceDiv = document.createElement("div");
      let discountPriceDiv = document.createElement("div");
      let typeP = document.createElement("p");
      let discountP = document.createElement("p");
      let discountPriceP = document.createElement("p");
      let quentityP = document.createElement("p");
      let priceP = document.createElement("p");

      let buttonDelete = document.createElement("button");

      // create section__end
      //
      //
      // value transfer

      li.classList.add("mainDivShop__productsUlLi");

      img.src = e.image;
      img.alt = e.title;
      img.classList.add("mainDivShop__productsUlLiImg");

      imgDiv.classList.add("mainDivShop__productsUlLiImgDiv");

      titel.textContent = e.title;
      titel.classList.add("mainDivShop__productsUlLiTitleP");

      typeDiscountPriceDiv.classList.add(
        "mainDivShop__productsUlLiTypeDicountPriceDiv"
      );

      discountPriceDiv.classList.add(
        "mainDivShop__productsUlLiDicountPriceDiv"
      );

      typeP.textContent = e.type;
      typeP.classList.add("mainDivShop__productsUlLiTypeP");

      discountP.textContent = "%" + e.discount.toString();
      discountP.classList.add("mainDivShop__productsUlLiDiscountP");

      discountPriceP.textContent =
        "$" + (e.price - (e.price / 100) * e.discount).toString();
      discountPriceP.classList.add("mainDivShop__productsUlLiDiscountPriceP");

      quentityP.textContent = e.quantity.toString();
      quentityP.classList.add("mainDivShop__productsUlLiQuentityP");

      priceP.textContent = "$" + e.price.toString();
      priceP.classList.add("mainDivShop__productsUlLiPriceP");

      if (e.discount) {
        priceP.style.textDecoration = "line-through";
      }

      buttonDelete.classList.add("mainDivShop__productsUlLiButtonDelete");
      buttonDelete.textContent = "-";
      buttonDelete.addEventListener("click", (event) => {
        this.deleteProductEvent(e.title);
      });
      // value transfer__end
      //
      //
      // add html

      typeDiscountPriceDiv.insertAdjacentElement("beforeend", typeP);

      if (e.discount) {
        discountPriceDiv.insertAdjacentElement("beforeend", discountPriceP);
        li.insertAdjacentElement("beforeend", discountP);
      }
      discountPriceDiv.insertAdjacentElement("beforeend", priceP);
      typeDiscountPriceDiv.insertAdjacentElement("beforeend", discountPriceDiv);

      imgDiv.insertAdjacentElement("beforeend", img);
      imgDiv.insertAdjacentElement("beforeend", quentityP);

      li.insertAdjacentElement("beforeend", imgDiv);
      li.insertAdjacentElement("beforeend", titel);
      li.insertAdjacentElement("beforeend", typeDiscountPriceDiv);
      li.insertAdjacentElement("beforeend", buttonDelete);

      this.productsUl.insertAdjacentElement("beforeend", li);

      // add html__end
    });
  }

  addEvent(
    deleteProductEvent: (title: string) => void,
    openCloseEvent: (check: boolean) => void
  ) {
    this.deleteProductEvent = deleteProductEvent;
    this.openCloseEvent = openCloseEvent;
  }
}
