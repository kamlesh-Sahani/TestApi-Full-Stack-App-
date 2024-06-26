import Link from "next/link";
import { TiWeatherStormy } from "react-icons/ti";
import { SiShopee } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Suspense } from "react";
interface ApiCardType {
  url: string;
  title: string;
  Icon: React.ElementType;
}
const ApiCard = ({ url, title, Icon }: ApiCardType) => (
  <Link href={`/${url}`}>
    <div className="flex gap-5 items-center p-2 bg-[#282A36] w-72 h-20 rounded-md cursor-pointer pl-7">
      <Icon className="text-2xl font-bold" />
      <p className="text-xl font-semibold  text-[#9cadc3]">{title}</p>
    </div>
  </Link>
);
export default function Home() {
  return (
    <main className="w-full flex justify-center items-center ">
      <div className="w-9/12 max-sm:w-full">
        <div className="flex flex-col mt-20  gap-10  w-full">
          <div className="w-full flex flex-col justify-center items-center ">
            <h1 className=" text-5xl text-[#ffffff] font-semibold text-center">
              High-Quality{" "}
              <span className=" bg-blue-500 text-white p-2">APIs</span>{" "}
              Available for Your Projects
            </h1>
            <p className="text-2xl text-[#9cadc3] w-3/4 text-center mt-4">
              Explore essential APIs tailored for testing and small-scale{" "}
              <span className=" bg-blue-500 text-white pl-2 pr-2">
                projects
              </span>
              . Accelerate your development process with{" "}
              <span className=" bg-blue-500 text-white pl-2 pr-2">
                powerful
              </span>{" "}
              tools designed for rapid prototyping and innovation. Dive into our
              comprehensive collection to{" "}
              <span className=" bg-blue-500 text-white pl-2 pr-2">
                build, test, and iterate{" "}
              </span>{" "}
              with ease.
            </p>
          </div>
          <p className="font-bold text-3xl mt-20  text-[#9cadc3] text-center">
            Free APIs
          </p>

          <div className="flex gap-10 justify-center items-center flex-wrap">
              <ApiCard
                title={"Weather Apis"}
                Icon={TiWeatherStormy}
                url={"weather"}
              />
              <ApiCard
                title={"Ecommerce Apis"}
                Icon={SiShopee}
                url={"ecommerce"}
              />
              <ApiCard
                title={"Product Apis"}
                Icon={MdProductionQuantityLimits}
                url={"product"}
              />
            
          </div>
        </div>
      </div>
    </main>
  );
}
