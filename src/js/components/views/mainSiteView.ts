export class MainSiteView {
  section: HTMLElement;
  titelDiv: HTMLDivElement;

  h1Titel: HTMLHeadingElement;
  descriptionP: HTMLParagraphElement;

  shopNowButton: HTMLButtonElement;
  shopNowButtonImage: HTMLImageElement;
  shopNowButtonP: HTMLParagraphElement;

  mainImage: HTMLImageElement;
  designImage: HTMLImageElement;

  constructor() {
    const main = document.querySelector("main");

    //Yranma hissesi

    this.section = document.createElement("section");
    this.titelDiv = document.createElement("div");

    this.h1Titel = document.createElement("h1");
    this.descriptionP = document.createElement("p");

    this.shopNowButton = document.createElement("button");
    this.shopNowButtonImage = document.createElement("img");
    this.shopNowButtonP = document.createElement("p");

    this.mainImage = document.createElement("img");
    this.designImage = document.createElement("img");
    //Yranma hissesi__end
    //
    //
    //Deyer alma

    this.section.classList.add("mainSection");

    this.titelDiv.classList.add("mainSection__titelDiv");

    this.h1Titel.classList.add("h1");
    this.h1Titel.textContent = "Collections";

    this.descriptionP.innerHTML = `
    you can explore ans shop many differnt collection 
     <span class="mainSection__Span">from various barands here.</span>
    `;
    this.descriptionP.classList.add("mainSection__descriptionP");
    this.shopNowButtonImage.src = "./src/images/additionaDesign/whiteBag.png";
    this.shopNowButtonImage.alt = "whiteBag";
    this.shopNowButtonImage.classList.add("mainSection__shopNowButtonImage");

    this.shopNowButtonP.textContent = "Shop Now";

    this.shopNowButton.classList.add("mainSection__shopNowButton");

    this.mainImage.src = "./src/images/additionaDesign/h1.png";
    this.mainImage.alt = "mainImage";
    this.mainImage.classList.add("mainSection__mainImage");

    this.designImage.src = "./src/images/additionaDesign/flovrwDizayn.png";
    this.designImage.alt = "flovrwDizayn";
    this.designImage.classList.add("mainSection__flovrwDizayn");

    //Deyer alma__end
    //
    //
    //kecis bolgesi

    this.shopNowButton.insertAdjacentElement(
      "beforeend",
      this.shopNowButtonImage
    );
    this.shopNowButton.insertAdjacentElement("beforeend", this.shopNowButtonP);

    this.titelDiv.insertAdjacentElement("beforeend", this.h1Titel);
    this.titelDiv.insertAdjacentElement("beforeend", this.descriptionP);
    this.titelDiv.insertAdjacentElement("beforeend", this.shopNowButton);

    this.section.insertAdjacentElement("beforeend", this.titelDiv);
    this.section.insertAdjacentElement("beforeend", this.mainImage);
    this.section.insertAdjacentElement("beforeend", this.designImage);

    main?.insertAdjacentHTML("beforeend", this.section.outerHTML);
    //kecis bolgesi__end
  }
}
