import { Product } from "./../../types/index";
export class NewStyleItemsView {
  sectionNewSItems: HTMLElement;

  titelH2: HTMLHeadingElement;

  buttonsDiv: HTMLDivElement;

  itemsButtonDiv: HTMLDivElement;

  allProductsButton: HTMLButtonElement;
  tShirtButton: HTMLButtonElement;
  hoodiesButton: HTMLButtonElement;
  jacketButton: HTMLButtonElement;

  filterSelect: HTMLSelectElement;

  productsUl: HTMLUListElement;

  allProductsEvent = (productRank: number) => {};
  tShirtEvent = (productRank: number) => {};
  hoodiesEvent = (productRank: number) => {};
  jacketEvent = (productRank: number) => {};

  selectFilterEvent = (productRank: number) => {};
  addProductEvent = (product: Product) => {};

  constructor() {
    const main = document.querySelector("main");

    // create section

    this.sectionNewSItems = document.createElement("section");

    this.titelH2 = document.createElement("h2");

    this.buttonsDiv = document.createElement("div");
    this.itemsButtonDiv = document.createElement("div");

    this.allProductsButton = document.createElement("button");
    this.tShirtButton = document.createElement("button");
    this.hoodiesButton = document.createElement("button");
    this.jacketButton = document.createElement("button");

    this.filterSelect = document.createElement("select");

    this.productsUl = document.createElement("ul");

    // create section__end
    //
    //
    // value transfer

    this.sectionNewSItems.classList.add("sectionNewSItems");

    this.titelH2.classList.add("sectionNewSItems__titelH2");
    this.titelH2.textContent = "Or Subscribe To The Newsletter";

    this.buttonsDiv.classList.add("sectionNewSItems__buttonsDiv");

    this.itemsButtonDiv.classList.add("sectionNewSItems__itemsButtonDiv");

    this.allProductsButton.classList.add("sectionNewSItems__allProductsButton");
    this.allProductsButton.textContent = "All products";
    this.allProductsButton.addEventListener("click", (event) => {
      this.allProductsEvent(-1);
    });

    this.tShirtButton.classList.add("sectionNewSItems__tShirtButton");
    this.tShirtButton.textContent = "T-shirt";
    this.tShirtButton.addEventListener("click", (event) => {
      this.tShirtEvent(4);
    });

    this.hoodiesButton.classList.add("sectionNewSItems__hoodiesButton");
    this.hoodiesButton.textContent = "hoodies";
    this.hoodiesButton.addEventListener("click", (event) => {
      this.hoodiesEvent(1);
    });

    this.jacketButton.classList.add("sectionNewSItems__jacketButton");
    this.jacketButton.textContent = "Jacket";
    this.jacketButton.addEventListener("click", (event) => {
      this.jacketEvent(2);
    });

    this.filterSelect.classList.add("sectionNewSItems__filterSelect");
    this.filterSelect.addEventListener("change", (event) => {
      let rank = -1;

      switch (Number(this.filterSelect.value)) {
        case 0:
          rank = 0;
          break;
        case 1:
          rank = 1;
          break;
        case 2:
          rank = 2;
          break;
        case 3:
          rank = 3;
          break;
        case 4:
          rank = 4;
          break;
        case 5:
          rank = 5;
          break;
      }

      this.selectFilterEvent(rank);
    });

    let opAllProduct = document.createElement("option");
    opAllProduct.value = "-1";
    opAllProduct.text = "All p roduct";
    let opBag = document.createElement("option");
    opBag.value = "0";
    opBag.text = "Bag";
    let opHoodies = document.createElement("option");
    opHoodies.value = "1";
    opHoodies.text = "Hoodies";
    let opJacets = document.createElement("option");
    opJacets.value = "2";
    opJacets.text = "Jacets";
    let opShoes = document.createElement("option");
    opShoes.value = "3";
    opShoes.text = "Shoes";
    let opT_shirts = document.createElement("option");
    opT_shirts.value = "4";
    opT_shirts.text = "T-Shirt";

    this.filterSelect.appendChild(opAllProduct);
    this.filterSelect.appendChild(opBag);
    this.filterSelect.appendChild(opHoodies);
    this.filterSelect.appendChild(opJacets);
    this.filterSelect.appendChild(opShoes);
    this.filterSelect.appendChild(opT_shirts);

    this.productsUl.classList.add("sectionNewSItems__productsUl");

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
    this.buttonsDiv.insertAdjacentElement("beforeend", this.filterSelect);

    this.sectionNewSItems.insertAdjacentElement("beforeend", this.titelH2);
    this.sectionNewSItems.insertAdjacentElement("beforeend", this.buttonsDiv);
    this.sectionNewSItems.insertAdjacentElement("beforeend", this.productsUl);

    main?.insertAdjacentElement("beforeend", this.sectionNewSItems);

    // add html__end
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

      productsUlLi.classList.add("sectionNewSItems__productsUlLi");

      productsUlLiImage.classList.add("sectionNewSItems__productsUlLiImage");
      productsUlLiImage.src = element.image;
      productsUlLiImage.alt = element.title;

      productsUlLiDivImage.classList.add(
        "sectionNewSItems__productsUlLiDivImage"
      );

      productsUlLiTitle.textContent = element.title;
      productsUlLiTitle.classList.add("sectionNewSItems__productsUlLiTitle");

      productsUlLiDivTypeAndPrice.classList.add(
        "sectionNewSItems__productsUlLiDivTypeAndPrice"
      );

      productsUlLiType.textContent = element.type;
      productsUlLiType.classList.add("sectionNewSItems__productsUlLiType");

      productsUlLiPrice.textContent = "$" + element.price.toString();
      productsUlLiPrice.classList.add("sectionNewSItems__productsUlLiPrice");

      productsUlLiQuantity.textContent = element.quantity.toString();
      productsUlLiQuantity.classList.add(
        "sectionNewSItems__productsUlLiQuantity"
      );

      productsUlLiDivDiscountAndPrice.classList.add(
        "sectionNewSItems__productsUlLiDivDiscountAndPrice"
      );

      if (element.discount) {
        productsUlLiDiscountPrice.textContent =
          "$" +
          (element.price - (element.price / 100) * element.discount).toString();
        productsUlLiDiscountPrice.classList.add(
          "sectionNewSItems__productsUlLiDiscountPrice"
        );
        productsUlLiDiscount.textContent = "%" + element.discount.toString();
        productsUlLiDiscount.classList.add(
          "sectionNewSItems__productsUlLiDiscount"
        );
        productsUlLiPrice.style.textDecoration = "line-through";
      }

      productsUlLiAddButton.textContent = "Add";
      productsUlLiAddButton.classList.add(
        "sectionNewSItems__productsUlLiAddButton"
      );
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

      productsUlLiRanOut.classList.add("sectionNewSItems__productsUlLiRanOut");
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
    this.selectFilterEvent = productEvent;
    this.addProductEvent = addProductLG;
  }
}
