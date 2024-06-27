import { TiWeatherStormy } from "react-icons/ti";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
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
    url: "/users",
    owner: "Hitesh choudary",
  },
  { id: 4, title: "Weather Apis", Icon: TiWeatherStormy, url: "/weather" },
];
