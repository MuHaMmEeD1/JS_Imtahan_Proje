export class FollowSectionView {
  sectionFollow: HTMLElement;

  titelFollowH2: HTMLHeadingElement;

  imagesUl: HTMLUListElement;
  imagesUlImage1: HTMLImageElement;
  imagesUlImage2: HTMLImageElement;
  imagesUlImage3: HTMLImageElement;
  imagesUlImage4: HTMLImageElement;
  imagesUlImage5: HTMLImageElement;
  imagesUlImage6: HTMLImageElement;

  titelSubscribeH2: HTMLHeadingElement;

  formEmailAddress: HTMLFormElement;

  inputEmail: HTMLInputElement;
  buttonSubmit: HTMLButtonElement;

  constructor() {
    const main = document.querySelector("main");
    // create section
    this.sectionFollow = document.createElement("section");

    this.titelFollowH2 = document.createElement("h2");

    this.imagesUl = document.createElement("ul");
    this.imagesUlImage1 = document.createElement("img");
    this.imagesUlImage2 = document.createElement("img");
    this.imagesUlImage3 = document.createElement("img");
    this.imagesUlImage4 = document.createElement("img");
    this.imagesUlImage5 = document.createElement("img");
    this.imagesUlImage6 = document.createElement("img");

    this.titelSubscribeH2 = document.createElement("h2");

    this.formEmailAddress = document.createElement("form");

    this.inputEmail = document.createElement("input");

    this.buttonSubmit = document.createElement("button");
    // create section__end
    //
    //
    // value transfer

    this.sectionFollow.classList.add("sectionFollow");

    this.titelFollowH2.classList.add("sectionFollow__titelFollowH2");
    this.titelFollowH2.textContent =
      "Follow Products And Discounts On Instagram";

    this.imagesUl.classList.add("sectionFollow__imagesUl");

    this.imagesUlImage1.src = "./src/images/hoodies/hooded_4.png";
    this.imagesUlImage1.alt = "hooded_4";
    this.imagesUlImage1.classList.add("sectionFollow__imagesUlImage1");

    this.imagesUlImage2.src = "./src/images/t-shirts/t-shirt_6.png";
    this.imagesUlImage2.alt = "t-shirt_6";
    this.imagesUlImage2.classList.add("sectionFollow__imagesUlImage2");

    this.imagesUlImage3.src = "./src/images/shoes/shoe_3.png";
    this.imagesUlImage3.alt = "shoe_3";
    this.imagesUlImage3.classList.add("sectionFollow__imagesUlImage3");

    this.imagesUlImage4.src = "./src/images/bags/bag_4.png";
    this.imagesUlImage4.alt = "bag_4";
    this.imagesUlImage4.classList.add("sectionFollow__imagesUlImage4");

    this.imagesUlImage5.src = "./src/images/jackets/jacket_1.png";
    this.imagesUlImage5.alt = "jacket_1";
    this.imagesUlImage5.classList.add("sectionFollow__imagesUlImage5");

    this.imagesUlImage6.src = "./src/images/t-shirts/t-shirt_7.png";
    this.imagesUlImage6.alt = "t-shirt_7";
    this.imagesUlImage6.classList.add("sectionFollow__imagesUlImage6");

    this.titelSubscribeH2.textContent = "Or Subscribe To The Newsletter";
    this.titelSubscribeH2.classList.add("sectionFollow__titelSubscribeH2");

    this.formEmailAddress.classList.add("sectionFollow__formEmailAddress");

    this.inputEmail.classList.add("sectionFollow__inputEmail");
    this.buttonSubmit.classList.add("sectionFollow__buttonSubmit");
    this.buttonSubmit.textContent = "SUBMIT";

    // value transfer__end
    //
    //
    // add html

    this.imagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.imagesUlImage1.outerHTML}</li>`
    );
    this.imagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.imagesUlImage2.outerHTML}</li>`
    );
    this.imagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.imagesUlImage3.outerHTML}</li>`
    );
    this.imagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.imagesUlImage4.outerHTML}</li>`
    );
    this.imagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.imagesUlImage5.outerHTML}</li>`
    );
    this.imagesUl.insertAdjacentHTML(
      "beforeend",
      `<li>${this.imagesUlImage6.outerHTML}</li>`
    );

    this.formEmailAddress.insertAdjacentElement("beforeend", this.inputEmail);
    this.formEmailAddress.insertAdjacentElement("beforeend", this.buttonSubmit);

    this.sectionFollow.insertAdjacentElement("beforeend", this.titelFollowH2);
    this.sectionFollow.insertAdjacentElement("beforeend", this.imagesUl);
    this.sectionFollow.insertAdjacentElement(
      "beforeend",
      this.titelSubscribeH2
    );
    this.sectionFollow.insertAdjacentElement(
      "beforeend",
      this.formEmailAddress
    );

    main?.insertAdjacentElement("beforeend", this.sectionFollow);
    // add html__end
  }
}
