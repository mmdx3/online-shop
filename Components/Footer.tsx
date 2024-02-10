import Link from "next/link";
import React from "react";

const Linkstype = [
  { name: "Home", href: "/" },
  { name: "shop", href: "/shop" },
  { name: "about", href: "/about" },
  { name: "content", href: "/content" },
];
const Helps = [
  { name: "Payment Options", href: "/" },
  { name: "Returns", href: "/" },
  { name: "Privacy Policies", href: "/" },
];

const Footer = () => {
  return (
    <footer className="mt-[35px] container mx-auto h-[505px] border-t border-[rgba(0,0,0,0.17)] flex justify-center items-center ">
      <div className="w-[1240px] h-[419px] flex flex-col justify-between items-start gap-[25px]">
        <div className="flex flex-row justify-between w-full ">
          <div className="flex flex-col gap-[50px] ">
            <h3 className="w-[85px] h-[36px] font-[700] text-[24px] leading-[36px] text-[#000000]">
              Funiro.
            </h3>
            <p className="w-[285px] h-[72px] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          <div className="w-[710px] h-[312px] flex justify-between items-start ">
            {/* links */}
            <div className="flex justify-between items-start w-[352px] h-[312px] ">
              {/* link */}
              <ul className="flex flex-col justify-between items-start w-[68px] h-[312px] ">
                <li className="font-[500] text-[16px] leading-[24px] capitalize text-[#9F9F9F]">
                  Links
                </li>
                {Linkstype.map((i) => (
                  <Link
                    href={i.href}
                    className="font-[500] text-[16px] leading-[24px] capitalize text-[#000000]"
                  >
                    {i.name}
                  </Link>
                ))}
              </ul>

              {/* help */}
              <ul className="flex flex-col justify-between items-start  h-[312px] ">
                <li className="font-[500] text-[16px] leading-[24px] capitalize text-[#9F9F9F]">
                  help
                </li>
                {Helps.map((i) => (
                  <Link
                    href={i.href}
                    className="font-[500] text-[16px] leading-[24px] capitalize text-[#000000]"
                  >
                    {i.name}
                  </Link>
                ))}
              </ul>
            </div>

            <div className="w-[286px] h-[101px] flex flex-col justify-between ">
              <h3 className="w-[86px] h-[24px] font-[500] text-[16px] leading-[24px] text-[#9F9F9F]">
                Newsletter
              </h3>

              <div className="w-[286px] h-[24px] flex justify-between items-start ">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[173px] h-[21px] font-[400] text-[14px] text-[#9F9F9F] outline-none border-none border-b border-[#9F9F9F] bg-transparent"
                  placeholder="Enter Your Email Address"
                />

                <h3 className="w-[75px] h-[21px] font-[500] text-[14px] leading-[21px] cursor-pointer ">
                  SUBSCRIBE
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="w-[1240px] h-[59px] border-t border-[#D9D9D9] flex justify-start items-end">
          <h3 className="w-[239px] h-[24px] font-[400] text-[16px] leading-[24px] text-[#000000]">
            2023 furino. All rights reverved
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
