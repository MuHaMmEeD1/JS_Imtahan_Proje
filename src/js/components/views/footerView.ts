export class FooterView {
  divFooter: HTMLElement;
  mainDiv: HTMLDivElement;

  logoDiv: HTMLDivElement;
  logoDivLogo: HTMLImageElement;
  logoDivTitle: HTMLParagraphElement;
  logoDivLogosUl: HTMLUListElement;

  logoDivLogosUlitem1: HTMLImageElement;
  logoDivLogosUlitem2: HTMLImageElement;
  logoDivLogosUlitem3: HTMLImageElement;
  logoDivLogosUlitem4: HTMLImageElement;

  mainUl: HTMLUListElement;
  catalogTitle: HTMLHeadingElement;
  catalogUl: HTMLUListElement;
  aboutUsTitle: HTMLHeadingElement;
  aboutUsUl: HTMLUListElement;
  costomerTitle: HTMLHeadingElement;
  costomerUl: HTMLUListElement;

  bottomDiv: HTMLDivElement;
  bottomDivP: HTMLParagraphElement;
  bottomDivImage: HTMLImageElement;

  bottomDivButton: HTMLButtonElement;
  bottomDivButtonP: HTMLParagraphElement;
  bottomDivButtonImage: HTMLImageElement;

  constructor() {
    const footer = document.querySelector("footer");

    // create section

    this.divFooter = document.createElement("section");

    this.mainDiv = document.createElement("div");

    this.logoDiv = document.createElement("div");
    this.logoDivLogo = document.createElement("img");
    this.logoDivTitle = document.createElement("p");
    this.logoDivLogosUl = document.createElement("ul");

    this.logoDivLogosUlitem1 = document.createElement("img");
    this.logoDivLogosUlitem2 = document.createElement("img");
    this.logoDivLogosUlitem3 = document.createElement("img");
    this.logoDivLogosUlitem4 = document.createElement("img");

    this.mainUl = document.createElement("ul");
    this.catalogTitle = document.createElement("h3");
    this.aboutUsTitle = document.createElement("h3");
    this.costomerTitle = document.createElement("h3");

    this.catalogUl = document.createElement("ul");
    this.aboutUsUl = document.createElement("ul");
    this.costomerUl = document.createElement("ul");

    this.bottomDiv = document.createElement("div");
    this.bottomDivP = document.createElement("p");
    this.bottomDivImage = document.createElement("img");

    this.bottomDivButton = document.createElement("button");
    this.bottomDivButtonP = document.createElement("p");
    this.bottomDivButtonImage = document.createElement("img");

    // create section__end
    //
    //
    // value transfer

    this.divFooter.classList.add("divFooter");

    this.mainDiv.classList.add("divFooter__mainDiv");

    this.logoDiv.classList.add("divFooter__logoDiv");

    this.logoDivLogo.src = "./src/images/additionaDesign/mainLogo.png";
    this.logoDivLogo.alt = "mainLogo";
    this.logoDivLogo.classList.add("divFooter__logoDivLogo");

    this.logoDivTitle.classList.add("divFooter__logoDivTitle");
    this.logoDivTitle.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing
elit, sed do eiusmod tempor incididunt ut labore et
dolore magna aliqua`;

    this.logoDivLogosUl.classList.add("divFooter__logoDivLogosUl");

    this.logoDivLogosUlitem1.src = "./src/images/additionaDesign/facebook.png";
    this.logoDivLogosUlitem1.alt = "facebook";
    this.logoDivLogosUlitem1.classList.add("divFooter__logoDivLogosUlitem1");

    this.logoDivLogosUlitem2.src = "./src/images/additionaDesign/tivitr.png";
    this.logoDivLogosUlitem2.alt = "tivitr";
    this.logoDivLogosUlitem2.classList.add("divFooter__logoDivLogosUlitem2");

    this.logoDivLogosUlitem3.src = "./src/images/additionaDesign/in.png";
    this.logoDivLogosUlitem3.alt = "in";
    this.logoDivLogosUlitem3.classList.add("divFooter__logoDivLogosUlitem3");

    this.logoDivLogosUlitem4.src = "./src/images/additionaDesign/instegram.png";
    this.logoDivLogosUlitem4.alt = "instegram";
    this.logoDivLogosUlitem4.classList.add("divFooter__logoDivLogosUlitem4");

    this.mainUl.classList.add("divFooter__mainUl");
    this.catalogTitle.textContent = "CATALOG";
    this.catalogTitle.classList.add("divFooter__catalogTitle");

    this.aboutUsTitle.textContent = "ABOUT US";
    this.aboutUsTitle.classList.add("divFooter__aboutUsTitle");

    this.costomerTitle.textContent = "CUSTOMER SERVICES";
    this.costomerTitle.classList.add("divFooter__costomerTitle");

    this.catalogUl.classList.add("divFooter__catalogUl");
    this.aboutUsUl.classList.add("divFooter__aboutUsUl");
    this.costomerUl.classList.add("divFooter__costomerUl");

    this.bottomDiv.classList.add("divFooter__bottomDiv");
    this.bottomDivP.textContent = "© 2022 Coral , Inc.";
    this.bottomDivP.classList.add("divFooter__bottomDivP");

    this.bottomDivImage.src = "./src/images/additionaDesign/carts.png";
    this.bottomDivImage.alt = "carts";
    this.bottomDivImage.classList.add("divFooter__bottomDivImage");

    this.bottomDivButton.classList.add("divFooter__bottomDivButton");
    this.bottomDivButtonP.textContent = "Scroll To Top";
    this.bottomDivButtonP.classList.add("divFooter__bottomDivButtonP");

    this.bottomDivButtonImage.src = "./src/images/additionaDesign/yuxairOx.png";
    this.bottomDivButtonImage.alt = "yuxairOx";
    this.bottomDivButtonImage.classList.add("divFooter__bottomDivButtonImage");

    // value transfer__end
    //
    //
    // add html

    this.logoDivLogosUl.insertAdjacentElement(
      "beforeend",
      this.logoDivLogosUlitem1
    );
    this.logoDivLogosUl.insertAdjacentElement(
      "beforeend",
      this.logoDivLogosUlitem2
    );
    this.logoDivLogosUl.insertAdjacentElement(
      "beforeend",
      this.logoDivLogosUlitem3
    );
    this.logoDivLogosUl.insertAdjacentElement(
      "beforeend",
      this.logoDivLogosUlitem4
    );

    this.logoDiv.insertAdjacentElement("beforeend", this.logoDivLogo);
    this.logoDiv.insertAdjacentElement("beforeend", this.logoDivTitle);
    this.logoDiv.insertAdjacentElement("beforeend", this.logoDivLogosUl);

    this.catalogUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> Necklaces </p></li>`
    );
    this.catalogUl.insertAdjacentHTML("beforeend", `<li><p> Hoodies </p></li>`);
    this.catalogUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> Jewelry Box </p></li>`
    );
    this.catalogUl.insertAdjacentHTML("beforeend", `<li><p> t-shirt </p></li>`);
    this.catalogUl.insertAdjacentHTML("beforeend", `<li><p> jacket </p></li>`);

    this.aboutUsUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> Our Producers </p></li>`
    );
    this.aboutUsUl.insertAdjacentHTML("beforeend", `<li><p> Sitemap </p></li>`);
    this.aboutUsUl.insertAdjacentHTML("beforeend", `<li><p> FAQ </p></li>`);
    this.aboutUsUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> About Us </p></li>`
    );
    this.aboutUsUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> Terms & Conditions </p></li>`
    );

    this.costomerUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> Contact Us </p></li>`
    );
    this.costomerUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> Track Your Order </p></li>`
    );
    this.costomerUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> Product Care & Repair </p></li>`
    );
    this.costomerUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> Book an Appointment </p></li>`
    );
    this.costomerUl.insertAdjacentHTML(
      "beforeend",
      `<li><p> Shipping & Returns </p></li>`
    );

    this.mainUl.insertAdjacentHTML(
      "beforeend",
      `<li> ${this.catalogTitle.outerHTML} ${this.catalogUl.outerHTML}</li>`
    );
    this.mainUl.insertAdjacentHTML(
      "beforeend",
      `<li> ${this.aboutUsTitle.outerHTML} ${this.aboutUsUl.outerHTML}</li>`
    );
    this.mainUl.insertAdjacentHTML(
      "beforeend",
      `<li> ${this.costomerTitle.outerHTML} ${this.costomerUl.outerHTML}</li>`
    );

    this.mainDiv.insertAdjacentElement("beforeend", this.logoDiv);
    this.mainDiv.insertAdjacentElement("beforeend", this.mainUl);

    this.bottomDivButton.insertAdjacentElement(
      "beforeend",
      this.bottomDivButtonP
    );
    this.bottomDivButton.insertAdjacentElement(
      "beforeend",
      this.bottomDivButtonImage
    );

    this.bottomDiv.insertAdjacentElement("beforeend", this.bottomDivP);
    this.bottomDiv.insertAdjacentElement("beforeend", this.bottomDivImage);
    this.bottomDiv.insertAdjacentElement("beforeend", this.bottomDivButton);

    this.divFooter.insertAdjacentElement("beforeend", this.mainDiv);
    this.divFooter.insertAdjacentElement("beforeend", this.bottomDiv);

    footer?.insertAdjacentElement("beforeend", this.divFooter);
    // add html__end
  }
}
