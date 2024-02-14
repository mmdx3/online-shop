import React from "react";
import JUM_ICON from "@/app/assets/icons/svgs/Jum";
import Tick from "@/app/assets/icons/svgs/Tic";
import Persent from "@/app/assets/icons/svgs/peresent";
import Support_icon from "@/app/assets/icons/svgs/Support";

type ItemType = {
  icon: React.JSX.Element;
  name: string;
  title: string;
};

const items: ItemType[] = [
  {
    icon: <JUM_ICON />,
    name: "High Quality",
    title: "crafted from top materials",
  },
  {
    icon: <Tick />,
    name: "Warranty Protection",
    title: "Over 2 years",
  },
  {
    icon: <Persent />,
    name: "Free Shipping",
    title: "Order over 150 $",
  },
  {
    icon: <Support_icon />,
    name: "24 / 7 Support",
    title: "Dedicated support",
  },
];

const MainSection = (): React.JSX.Element => {
  return (
    <div className="container mx-auto h-[270px] flex justify-center py-[100px] items-center bg-[#FAF3EA]">
      <div className="w-[1334px] h-[70px] justify-between flex gap-[23px]">
        {items.map((item) => (
          <div className="flex justify-between items-center w-[337px] h-[70px] gap-[10px]">
            {item.icon}

            <div className="flex flex-col justify-between items-start gap-[5px] w-[267px] h-[70px]">
              <span className="font-[600] text-[25px] text-[#242424]">
                {item.name}
              </span>
              <span className="font-[500] text-[20px] text-[#898989]">
                {item.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;
