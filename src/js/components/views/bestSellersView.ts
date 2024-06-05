import { Product } from "./../../types/index";

export class BestSellersView {
  sectionBest: HTMLElement;

  titelH2: HTMLHeadingElement;

  buttonsDiv: HTMLDivElement;

  itemsButtonDiv: HTMLDivElement;

  allProductsButton: HTMLButtonElement;
  tShirtButton: HTMLButtonElement;
  hoodiesButton: HTMLButtonElement;
  jacketButton: HTMLButtonElement;

  showAlButton: HTMLButtonElement;

  productsUl: HTMLUListElement;

  allProductsEvent = (productRank: number) => {};
  tShirtEvent = (productRank: number) => {};
  hoodiesEvent = (productRank: number) => {};
  jacketEvent = (productRank: number) => {};

  showAllEvent = (productRank: number) => {};
  addProductEvent = (product: Product) => {};

  constructor() {
    const main = document.querySelector("main");

    // create section

    this.sectionBest = document.createElement("section");

    this.titelH2 = document.createElement("h2");

    this.buttonsDiv = document.createElement("div");

    this.itemsButtonDiv = document.createElement("div");
    this.allProductsButton = document.createElement("button");
    this.tShirtButton = document.createElement("button");
    this.hoodiesButton = document.createElement("button");
    this.jacketButton = document.createElement("button");

    this.showAlButton = document.createElement("button");

    this.productsUl = document.createElement("ul");

    // create section__end
    //
    //
    // value transfer

    this.sectionBest.classList.add("sectionBest");

    this.titelH2.textContent = "Best sellers";
    this.titelH2.classList.add("sectionBest__titelH2");

    this.buttonsDiv.classList.add("sectionBest__buttonsDiv");

    this.itemsButtonDiv.classList.add("sectionBest__itemsButtonDiv");

    this.allProductsButton.classList.add("sectionBest__allProductsButton");
    this.tShirtButton.classList.add("sectionBest__tShirtButton");
    this.hoodiesButton.classList.add("sectionBest__hoodiesButton");
    this.jacketButton.classList.add("sectionBest__jacketButton");

    this.allProductsButton.textContent = "All Products";
    this.tShirtButton.textContent = "T-Shirt";
    this.hoodiesButton.textContent = "Hoodies";
    this.jacketButton.textContent = "Jacket";

    this.allProductsButton.addEventListener("click", (e) => {
      this.allProductsEvent(-1);
    });
    this.tShirtButton.addEventListener("click", (e) => {
      this.allProductsEvent(4);
    });
    this.hoodiesButton.addEventListener("click", (e) => {
      this.allProductsEvent(1);
    });
    this.jacketButton.addEventListener("click", (e) => {
      this.allProductsEvent(2);
    });

    this.showAlButton.classList.add("sectionBest__showAlButton");
    this.showAlButton.textContent = "Show All";

    this.showAlButton.addEventListener("click", (e) => {
      this.showAllEvent(-2);

      if (this.showAlButton.textContent == "Show All") {
        this.showAlButton.textContent = "Show Less";
      } else {
        this.showAlButton.textContent = "Show All";
      }
    });

    this.productsUl.classList.add("sectionBest__productsUl");

    // value transfer__end
    //
    //
    // add html

    this.itemsButtonDiv.insertAdjacentElement(
      "beforeend",
      this.allProductsButton
    );
    this.itemsButtonDiv.insertAdjacentElement("beforeend", this.tShirtButton);
    this.itemsButtonDiv.insertAdjacentElement("beforeend", this.hoodiesButton);
    this.itemsButtonDiv.insertAdjacentElement("beforeend", this.jacketButton);

    this.buttonsDiv.insertAdjacentElement("beforeend", this.itemsButtonDiv);
    this.buttonsDiv.insertAdjacentElement("beforeend", this.showAlButton);

    this.sectionBest.insertAdjacentElement("beforeend", this.titelH2);
    this.sectionBest.insertAdjacentElement("beforeend", this.buttonsDiv);
    this.sectionBest.insertAdjacentElement("beforeend", this.productsUl);

    main?.insertAdjacentElement("beforeend", this.sectionBest);

    // add html_end
  }

  showProducts(products: Product[]) {
    this.productsUl.innerHTML = "";
    products.forEach((element) => {
      // create section
      let productsUlLi = document.createElement("li");

      let productsUlLiImage = document.createElement("img");
      let productsUlLiDivImage = document.createElement("div");
      let productsUlLiTitle = document.createElement("p");
      let productsUlLiDivTypeAndPrice = document.createElement("div");
      let productsUlLiDivDiscountAndPrice = document.createElement("div");
      let productsUlLiType = document.createElement("p");
      let productsUlLiPrice = document.createElement("p");
      let productsUlLiQuantity = document.createElement("p");
      let productsUlLiDiscount = document.createElement("p");
      let productsUlLiDiscountPrice = document.createElement("p");
      let productsUlLiRanOut = document.createElement("p");

      let productsUlLiAddButton = document.createElement("button");

      // create section__end
      //
      //
      // value transfer

      productsUlLi.classList.add("sectionBest__productsUlLi");

      productsUlLiImage.classList.add("sectionBest__productsUlLiImage");
      productsUlLiImage.src = element.image;
      productsUlLiImage.alt = element.title;

      productsUlLiDivImage.classList.add("sectionBest__productsUlLiDivImage");

      productsUlLiTitle.textContent = element.title;
      productsUlLiTitle.classList.add("sectionBest__productsUlLiTitle");

      productsUlLiDivTypeAndPrice.classList.add(
        "sectionBest__productsUlLiDivTypeAndPrice"
      );

      productsUlLiType.textContent = element.type;
      productsUlLiType.classList.add("sectionBest__productsUlLiType");

      productsUlLiPrice.textContent = "$" + element.price.toString();
      productsUlLiPrice.classList.add("sectionBest__productsUlLiPrice");

      productsUlLiQuantity.textContent = element.quantity.toString();
      productsUlLiQuantity.classList.add("sectionBest__productsUlLiQuantity");

      productsUlLiDivDiscountAndPrice.classList.add(
        "sectionBest__productsUlLiDivDiscountAndPrice"
      );

      if (element.discount) {
        productsUlLiDiscountPrice.textContent =
          "$" +
          (element.price - (element.price / 100) * element.discount).toString();
        productsUlLiDiscountPrice.classList.add(
          "sectionBest__productsUlLiDiscountPrice"
        );
        productsUlLiDiscount.textContent = "%" + element.discount.toString();
        productsUlLiDiscount.classList.add("sectionBest__productsUlLiDiscount");
        productsUlLiPrice.style.textDecoration = "line-through";
      }

      productsUlLiAddButton.textContent = "Add";
      productsUlLiAddButton.classList.add("sectionBest__productsUlLiAddButton");
      productsUlLiAddButton.addEventListener("click", (e) => {
        let pr: Product = {
          image: element.image,
          title: element.title,
          type: element.type,
          price: element.price,
          quantity: element.quantity,
          discount: element.discount,
        };

        this.addProductEvent(pr);
      });

      productsUlLiRanOut.classList.add("sectionBest__productsUlLiRanOut");
      productsUlLiRanOut.textContent = "Ran Out";
      productsUlLiRanOut.style.opacity = "0";

      if (element.quantity == 0) {
        productsUlLi.style.opacity = "0.5";
        productsUlLiRanOut.style.opacity = "1";
        productsUlLiAddButton.style.display = "none";
      }

      // value transfer__end
      //
      // add html

      productsUlLiDivImage.insertAdjacentElement(
        "beforeend",
        productsUlLiImage
      );
      productsUlLi.insertAdjacentElement("beforeend", productsUlLiDiscount);
      productsUlLiDivImage.insertAdjacentElement(
        "beforeend",
        productsUlLiQuantity
      );

      productsUlLiDivTypeAndPrice.insertAdjacentElement(
        "beforeend",
        productsUlLiType
      );
      if (element.discount) {
        productsUlLiDivTypeAndPrice.insertAdjacentElement(
          "beforeend",
          productsUlLiDivDiscountAndPrice
        );

        productsUlLiDivDiscountAndPrice.insertAdjacentElement(
          "beforeend",
          productsUlLiDiscountPrice
        );
        productsUlLiDivDiscountAndPrice.insertAdjacentElement(
          "beforeend",
          productsUlLiPrice
        );
      } else {
        productsUlLiDivTypeAndPrice.insertAdjacentElement(
          "beforeend",
          productsUlLiPrice
        );
      }
      productsUlLi.insertAdjacentElement("beforeend", productsUlLiDivImage);
      productsUlLi.insertAdjacentElement("beforeend", productsUlLiTitle);
      productsUlLi.insertAdjacentElement(
        "beforeend",
        productsUlLiDivTypeAndPrice
      );
      productsUlLi.insertAdjacentElement("beforeend", productsUlLiAddButton);
      productsUlLi.insertAdjacentElement("beforeend", productsUlLiRanOut);

      this.productsUl.insertAdjacentElement("beforeend", productsUlLi);

      // add html__end
    });
  }

  addEvent(
    productEvent: (productRank: number) => void,
    addProductLG: (product: Product) => void
  ) {
    this.allProductsEvent = productEvent;
    this.tShirtEvent = productEvent;
    this.hoodiesEvent = productEvent;
    this.jacketEvent = productEvent;
    this.showAllEvent = productEvent;
    this.addProductEvent = addProductLG;
  }
}
