import axios from "../node_modules/axios";
import { BestSellersConturol } from "./js/components/conturols/bestSellersConturol";
import { BrandItemsConturol } from "./js/components/conturols/brandItemsConturol";
import { FollowSectionConturol } from "./js/components/conturols/followSectionConturol";
import { FooterConturol } from "./js/components/conturols/footerConturol";
import { HeaderConturol } from "./js/components/conturols/headerConturol";
import { MainSiteConturol } from "./js/components/conturols/mainSiteConturol";
import { NewStyleItemsConturol } from "./js/components/conturols/newStyleItemsConturol";
import { ShopConturol } from "./js/components/conturols/shopConturol";
import { SpecialItemCounturol } from "./js/components/conturols/specialItemConturol";

/////
import "./sass/main.scss";
/////

async function getPost() {
  let posts = await axios.get("../db.json");
  console.dir(posts);
}
getPost();

if (!localStorage.getItem("productsBuys")) {
  localStorage.setItem("productsBuys", JSON.stringify([]));
}

const hc = new HeaderConturol();
const msc = new MainSiteConturol();
const bic = new BrandItemsConturol();
const nsic = new NewStyleItemsConturol();
const sic = new SpecialItemCounturol();
const bsc = new BestSellersConturol();
const fsc = new FollowSectionConturol();
const fc = new FooterConturol();
const sc = new ShopConturol();
hc.addEvent(sc.openCloseShow.bind(sc));
nsic.addEventInThis(sc.showProducts.bind(sc));
bsc.addEventInThis(sc.showProducts.bind(sc));
