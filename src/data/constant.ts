import { TiWeatherStormy } from "react-icons/ti";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { TbBrandShopee } from "react-icons/tb";
export interface ApiDataType {
  id: number;
  title: string;
  Icon: React.ElementType;
  url: string;
  owner?: string;
}
export const apiData: ApiDataType[] = [
  {
    id: 1,
    title: "Weather Apis",
    Icon: TiWeatherStormy,
    url: "/weather",
  },
  {
    id: 2,
    title: "Product Apis",
    Icon: MdProductionQuantityLimits,
    url: "/product",
  },
  {
    id: 3,
    title: "Random User Apis",
    Icon: FaUserAlt,
    url: "/randomusers",
    owner: "Hitesh choudary",
  },
  { id: 4, title: "Jokes Apis", Icon: FaRegSmileWink, url: "/randomjokes",owner:"Hitesh choudary" },
  { id: 5, title: "Product2 Apis", Icon: MdProductionQuantityLimits, url: "/randomproducts",  owner:"Hitesh choudary" },
  { id: 6, title: "Books Apis", Icon: LiaBookSolid, url: "/books",  owner:"Hitesh choudary" },
  { id: 7, title: "Stock Apis", Icon: FaMoneyBillTrendUp, url: "/stock",  owner:"Hitesh choudary" },
  { id: 8, title: "Quotes Apis", Icon: RiDoubleQuotesL, url: "/quotes",  owner:"Hitesh choudary" },
  { id: 9, title: "Youtube Apis", Icon: IoLogoYoutube, url: "/youtube",  owner:"Hitesh choudary" },
  { id: 10, title: "Ecommerce Apis", Icon: TbBrandShopee, url: "/ecommerce",  owner:"Hitesh choudary" },


];
