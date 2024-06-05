export class HeaderView {
  topDiv: HTMLDivElement;

  searchImage: HTMLImageElement;
  mainLogo: HTMLImageElement;

  //// mainDiv
  divManAndShop: HTMLDivElement;

  accountButton: HTMLButtonElement;
  accountImage: HTMLImageElement;
  accountP: HTMLParagraphElement;

  shopingButton: HTMLButtonElement;
  shopingImage: HTMLImageElement;
  shopingP: HTMLParagraphElement;

  //// mainDiv__end

  //// pageUl

  pagesUl: HTMLUListElement;

  page1P: HTMLParagraphElement;
  page2P: HTMLParagraphElement;
  page3P: HTMLParagraphElement;
  page4P: HTMLParagraphElement;
  page5P: HTMLParagraphElement;
  page6P: HTMLParagraphElement;
  page7P: HTMLParagraphElement;

  //// pageUl__end

  opneShopEvent = (check: boolean) => {};

  constructor() {
    const header = document.querySelector("header");

    // create sectio
    this.topDiv = document.createElement("div");

    this.searchImage = document.createElement("img");
    this.mainLogo = document.createElement("img");

    this.divManAndShop = document.createElement("div");

    this.accountButton = document.createElement("button");
    this.accountImage = document.createElement("img");
    this.accountP = document.createElement("p");

    this.shopingButton = document.createElement("button");
    this.shopingImage = document.createElement("img");
    this.shopingP = document.createElement("p");

    this.pagesUl = document.createElement("ul");

    this.page1P = document.createElement("p");
    this.page2P = document.createElement("p");
    this.page3P = document.createElement("p");
    this.page4P = document.createElement("p");
    this.page5P = document.createElement("p");
    this.page6P = document.createElement("p");
    this.page7P = document.createElement("p");

    // create section__end
    //
    //
    // value transfer

    this.topDiv.classList.add("header__topDiv");

    this.searchImage.src = "./src/images/additionaDesign/searchTool.png";
    this.searchImage.classList.add("searchImage");
    this.searchImage.alt = "searchImage";

    this.mainLogo.src = "./src/images/additionaDesign/mainLogo.png";
    this.mainLogo.classList.add("mainLogo");
    this.mainLogo.alt = "mainLogo";

    //divManAndShop
    this.divManAndShop.classList.add("divManAndShop");

    this.accountButton.classList.add("accountDiv");
    this.accountImage.src = "./src/images/additionaDesign/manIcon.png";
    this.accountImage.classList.add("accountImage");
    this.accountImage.alt = "manIcon";
    this.accountP.textContent = "Account";
    this.accountP.classList.add("accountP");
    this.shopingButton.classList.add("shopingDiv");
    this.shopingImage.src = "./src/images/additionaDesign/bagBlack.png";
    this.shopingImage.classList.add("shopingImage");
    this.shopingImage.alt = "shopingImage";
    this.shopingP.textContent = "Shoping";
    this.shopingP.classList.add("shopingP");

    //divManAndShop__end

    this.pagesUl.classList.add("pagesUl");

    this.page1P.textContent = "Jewelry & Accessories";
    this.page2P.textContent = "Clothing & Shoes";
    this.page3P.textContent = "Home & Living";
    this.page4P.textContent = "Wedding & Party";
    this.page5P.textContent = "Toys & Entertainment";
    this.page6P.textContent = "Art & Collectibles";
    this.page7P.textContent = "Craft Supplies & Tools";

    this.page1P.classList.add("page1P");
    this.page2P.classList.add("page2P");
    this.page3P.classList.add("page3P");
    this.page4P.classList.add("page4P");
    this.page5P.classList.add("page5P");
    this.page6P.classList.add("page6P");
    this.page7P.classList.add("page7P");

    this.shopingButton.addEventListener("click", (event) => {
      this.opneShopEvent(true);
    });

    console.log("header");
    // value transfer__end
    //
    //
    // add html
    this.accountButton.insertAdjacentElement("beforeend", this.accountImage);
    this.accountButton.insertAdjacentElement("beforeend", this.accountP);

    this.shopingButton.insertAdjacentElement("beforeend", this.shopingImage);
    this.shopingButton.insertAdjacentElement("beforeend", this.shopingP);

    this.divManAndShop.insertAdjacentElement("beforeend", this.accountButton);
    this.divManAndShop.insertAdjacentElement("beforeend", this.shopingButton);

    //

    this.pagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.page1P.outerHTML}</li>`
    );
    this.pagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.page2P.outerHTML}</li>`
    );
    this.pagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.page3P.outerHTML}</li>`
    );
    this.pagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.page4P.outerHTML}</li>`
    );
    this.pagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.page5P.outerHTML}</li>`
    );
    this.pagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.page6P.outerHTML}</li>`
    );
    this.pagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.page7P.outerHTML}</li>`
    );
    //

    this.topDiv?.insertAdjacentElement("beforeend", this.searchImage);
    this.topDiv?.insertAdjacentElement("beforeend", this.mainLogo);
    this.topDiv?.insertAdjacentElement("beforeend", this.divManAndShop);
    header?.insertAdjacentElement("beforeend", this.topDiv);
    header?.insertAdjacentElement("beforeend", this.pagesUl);
    // add html__end
  }

  addEvent(opneShopEvent: (check: boolean) => void) {
    this.opneShopEvent = opneShopEvent;
  }
}
