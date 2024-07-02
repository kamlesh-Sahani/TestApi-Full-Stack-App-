import { TiWeatherStormy } from "react-icons/ti";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
import { LiaBookSolid } from "react-icons/lia";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";
import { TbBrandShopee } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { RiTodoFill } from "react-icons/ri";
import { FaRegSquarePlus } from "react-icons/fa6";
import { SiSpacex } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa6";

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
  {
    id: 4,
    title: "Jokes Apis",
    Icon: FaRegSmileWink,
    url: "/randomjokes",
    owner: "Hitesh choudary",
  },
  {
    id: 5,
    title: "Product2 Apis",
    Icon: MdProductionQuantityLimits,
    url: "/randomproducts",
    owner: "Hitesh choudary",
  },
  {
    id: 6,
    title: "Books Apis",
    Icon: LiaBookSolid,
    url: "/books",
    owner: "Hitesh choudary",
  },
  {
    id: 7,
    title: "Stock Apis",
    Icon: FaMoneyBillTrendUp,
    url: "/stock",
    owner: "Hitesh choudary",
  },
  {
    id: 8,
    title: "Quotes Apis",
    Icon: RiDoubleQuotesL,
    url: "/quotes",
    owner: "Hitesh choudary",
  },
  {
    id: 9,
    title: "Youtube Apis",
    Icon: IoLogoYoutube,
    url: "/youtube",
    owner: "Hitesh choudary",
  },
  { id: 16, title: "Weather Apis2", Icon: TiWeatherStormy, url: "/weather2" },


  { id: 17, title: "SpaceX Launches Apis", Icon: SiSpacex, url: "/spacex-lounches" },
  { id: 18, title: "SpaceX Rocket Apis", Icon: SiSpacex, url: "/spacex-rocket" },
  { id: 19, title: "SpaceX Capsules Apis", Icon: SiSpacex, url: "/spacex-capsules" },
  { id: 20, title: "SpaceX Starlink Apis", Icon: SiSpacex, url: "/spacex-starlink" },
  { id: 20, title: "CoinGecko Apis", Icon: FaBitcoin, url: "/coingecko" },





  // failed apis--------------------------------------
  {
    id: 10,
    title: "Ecommerce Apis",
    Icon: TbBrandShopee,
    url: "/ecommerce",
    owner: "Hitesh choudary",
  },
  {
    id: 11,
    title: "Social Media Apis",
    Icon: FaInstagram,
    url: "/socialMedia",
    owner: "Hitesh choudary",
  },
  {
    id: 12,
    title: "Social Media Post Apis",
    Icon: FaRegSquarePlus,
    url: "/socialMediaPosts",
    owner: "Hitesh choudary",
  },
  {
    id: 13,
    title: "Chat App Apis",
    Icon: IoChatbubbleEllipsesSharp,
    url: "/chatApp",
    owner: "Hitesh choudary",
  },
  {
    id: 14,
    title: "Group Chat Apis",
    Icon: IoChatbubblesSharp,
    url: "/groupChat",
    owner: "Hitesh choudary",
  },
  {
    id: 15,
    title: "ToDo List Apis",
    Icon: RiTodoFill,
    url: "/toDoList",
    owner: "Hitesh choudary",
  },
];
