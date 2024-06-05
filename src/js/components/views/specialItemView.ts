export class SpecialItemView {
  sectionSpecile: HTMLElement;

  mainImage: HTMLImageElement;

  explantionDiv: HTMLDivElement;

  titelH2: HTMLHeadingElement;

  commentP: HTMLParagraphElement;

  seeCollectionButton: HTMLButtonElement;

  constructor() {
    const main = document.querySelector("main");

    // create section

    this.sectionSpecile = document.createElement("section");

    this.mainImage = document.createElement("img");

    this.explantionDiv = document.createElement("div");

    this.titelH2 = document.createElement("h2");

    this.commentP = document.createElement("p");

    this.seeCollectionButton = document.createElement("button");

    // create section__end
    //
    //
    // value transfer

    this.sectionSpecile.classList.add("sectionSpecile");

    this.mainImage.src = "./src/images/additionaDesign/specialSuit.png";
    this.mainImage.alt = "specialSuit";
    this.mainImage.classList.add("sectionSpecile__mainImage");

    this.explantionDiv.classList.add("sectionSpecile__explantionDiv");

    this.titelH2.textContent = "MNM";
    this.titelH2.classList.add("sectionSpecile__titelH2");

    this.commentP.textContent = `Lustrous yet understated. The new evening
wear collection exclusively offered at the
reopened Giorgio Armani boutique in Los
Angeles.`;
    this.commentP.classList.add("sectionSpecile__commentP");

    this.seeCollectionButton.textContent = "See collection";
    this.seeCollectionButton.classList.add(
      "sectionSpecile__seeCollectionButton"
    );

    // value transfer__end
    //
    //
    // add html

    this.explantionDiv.insertAdjacentElement("beforeend", this.titelH2);
    this.explantionDiv.insertAdjacentElement("beforeend", this.commentP);
    this.explantionDiv.insertAdjacentElement(
      "beforeend",
      this.seeCollectionButton
    );

    this.sectionSpecile.insertAdjacentElement("beforeend", this.mainImage);
    this.sectionSpecile.insertAdjacentElement("beforeend", this.explantionDiv);

    main?.insertAdjacentElement("beforeend", this.sectionSpecile);

    // add html__end
  }
}
