import { GoCopy } from "react-icons/go";
import { MdOpenInNew } from "react-icons/md";
import { CodeBlock, dracula } from "react-code-blocks";
import { useState } from "react";

interface ApiCardType{
    apiUrl:string;
    description:string;
    code:string;
}
const ApiCard = ({apiUrl,description,code}:ApiCardType) => {
    const [isCopy,setIsCopy] = useState<boolean>(false);
    const copyHandler = ()=>{
      navigator.clipboard.writeText(apiUrl); 
      setIsCopy(true);
      setTimeout(()=>{
        setIsCopy(false);
      },1000);
    }
  return (
    <div className="flex flex-col gap-8 mt-16">
      <div className="flex flex-col gap-4 ">
        <p className=" font-semibold text-[#9cadc3] text-lg text-wrap">
          {description}
        </p>

        <div className="flex justify-between items-center pl-4 bg-[#282A36]  p-5 w-auto  ">
          <p className="font-semibold text-xl text-[#9cadc3] ">
          {apiUrl}
          </p>
          <div className="flex gap-4">
            {
                isCopy &&  <p className="text-[#9cadc3] font-semibold ">Copied</p>
            }
           
            <GoCopy className=" cursor-pointer text-2xl  text-[#9cadc3]" onClick={copyHandler} />
            <a href={apiUrl}>
              {" "}
              <MdOpenInNew className=" cursor-pointer text-2xl  text-[#9cadc3]" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-[#9cadc3]">{"Example-> JSON data"}</p>
          <CodeBlock
            text={code}
            language={"json"}
            showLineNumbers={true}
            theme={dracula}
          />
        </div>
      </div>
    </div>
  );
};

export default ApiCard;
