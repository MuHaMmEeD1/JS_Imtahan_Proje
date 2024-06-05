export class BrandItemsView {
  brandSection: HTMLElement;

  brandImagesUl: HTMLUListElement;
  brandImagesUlImage1: HTMLImageElement;
  brandImagesUlImage2: HTMLImageElement;
  brandImagesUlImage3: HTMLImageElement;
  brandImagesUlImage4: HTMLImageElement;
  brandImagesUlImage5: HTMLImageElement;

  brandGrid: HTMLDivElement;

  brandTitelP: HTMLParagraphElement;

  brandMainImage: HTMLImageElement;

  brandSimpelDiv: HTMLDivElement;
  brandSimpelImage1: HTMLImageElement;
  brandSimpelImage2: HTMLImageElement;
  brandSimpelImage3: HTMLImageElement;
  brandSimpelImage4: HTMLImageElement;

  constructor() {
    const main = document.querySelector("main");

    // create section

    this.brandSection = document.createElement("section");

    this.brandImagesUl = document.createElement("ul");
    this.brandImagesUlImage1 = document.createElement("img");
    this.brandImagesUlImage2 = document.createElement("img");
    this.brandImagesUlImage3 = document.createElement("img");
    this.brandImagesUlImage4 = document.createElement("img");
    this.brandImagesUlImage5 = document.createElement("img");

    this.brandGrid = document.createElement("div");

    this.brandTitelP = document.createElement("p");

    this.brandMainImage = document.createElement("img");

    this.brandSimpelDiv = document.createElement("div");
    this.brandSimpelImage1 = document.createElement("img");
    this.brandSimpelImage2 = document.createElement("img");
    this.brandSimpelImage3 = document.createElement("img");
    this.brandSimpelImage4 = document.createElement("img");

    // create section__end
    //
    //
    // value transfer
    this.brandSection.classList.add("brandSection");

    this.brandImagesUl.classList.add("brandImagesUl");

    this.brandImagesUlImage1.src =
      "./src/images/additionaDesign/reklamLogo1.png";
    this.brandImagesUlImage1.alt = "reklamLogo1";
    this.brandImagesUlImage1.classList.add("brandImagesUlImage1");

    this.brandImagesUlImage2.src =
      "./src/images/additionaDesign/reklamLogo2.png";
    this.brandImagesUlImage2.alt = "reklamLogo2";
    this.brandImagesUlImage2.classList.add("brandImagesUlImage2");

    this.brandImagesUlImage3.src =
      "./src/images/additionaDesign/reklamLogo3.png";
    this.brandImagesUlImage3.alt = "reklamLogo3";
    this.brandImagesUlImage3.classList.add("brandImagesUlImage3");

    this.brandImagesUlImage4.src =
      "./src/images/additionaDesign/reklamLogo4.png";
    this.brandImagesUlImage4.alt = "reklamLogo4";
    this.brandImagesUlImage4.classList.add("brandImagesUlImage4");

    this.brandImagesUlImage5.src =
      "./src/images/additionaDesign/reklamLogo5.png";
    this.brandImagesUlImage5.alt = "reklamLogo5";
    this.brandImagesUlImage5.classList.add("brandImagesUlImage5");

    this.brandGrid.classList.add("brandGrid");

    this.brandTitelP.textContent = "EXPLORE NEW AND POPULAR SYTLES";
    this.brandTitelP.classList.add("brandSection__brandGrid");

    this.brandMainImage.src = "./src/images/additionaDesign/mm1.png";
    this.brandMainImage.alt = "mm1";
    this.brandMainImage.classList.add("brandMainImage");

    this.brandSimpelDiv.classList.add("brandSimpelDiv");

    this.brandSimpelImage1.src = "./src/images/additionaDesign/m1.png";
    this.brandSimpelImage1.alt = "m1";
    this.brandSimpelImage1.classList.add("brandSimpelImage1");

    this.brandSimpelImage2.src = "./src/images/additionaDesign/m2.png";
    this.brandSimpelImage2.alt = "m2";
    this.brandSimpelImage2.classList.add("brandSimpelImage2");

    this.brandSimpelImage3.src = "./src/images/additionaDesign/m3.png";
    this.brandSimpelImage3.alt = "m3";
    this.brandSimpelImage3.classList.add("brandSimpelImage3");

    this.brandSimpelImage4.src = "./src/images/additionaDesign/m4.png";
    this.brandSimpelImage4.alt = "m4";
    this.brandSimpelImage4.classList.add("brandSimpelImage4");

    // value transfer__end
    //
    //
    // add section

    this.brandImagesUl.insertAdjacentElement(
      "beforeend",
      this.brandImagesUlImage1
    );

    this.brandImagesUl.insertAdjacentElement(
      "beforeend",
      this.brandImagesUlImage2
    );

    this.brandImagesUl.insertAdjacentElement(
      "beforeend",
      this.brandImagesUlImage3
    );

    this.brandImagesUl.insertAdjacentElement(
      "beforeend",
      this.brandImagesUlImage4
    );

    this.brandImagesUl.insertAdjacentElement(
      "beforeend",
      this.brandImagesUlImage5
    );

    this.brandSimpelDiv.insertAdjacentElement(
      "beforeend",
      this.brandSimpelImage1
    );
    this.brandSimpelDiv.insertAdjacentElement(
      "beforeend",
      this.brandSimpelImage2
    );
    this.brandSimpelDiv.insertAdjacentElement(
      "beforeend",
      this.brandSimpelImage3
    );
    this.brandSimpelDiv.insertAdjacentElement(
      "beforeend",
      this.brandSimpelImage4
    );

    this.brandGrid.insertAdjacentElement("beforeend", this.brandTitelP);
    this.brandGrid.insertAdjacentElement("beforeend", this.brandMainImage);
    this.brandGrid.insertAdjacentElement("beforeend", this.brandSimpelDiv);

    this.brandSection.insertAdjacentElement("beforeend", this.brandImagesUl);
    this.brandSection.insertAdjacentElement("beforeend", this.brandGrid);

    main?.insertAdjacentElement("beforeend", this.brandSection);
    // add section__end
  }
}
