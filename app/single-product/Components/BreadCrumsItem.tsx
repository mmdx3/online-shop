import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  href: string | "/";
};

const BreadCrumsItem = ({ name, href }: Props) => {
  return (
    <>
      <Link
        href={href}
        className="w-[82px] h-[24px] flex gap-[5px] items-center"
      >
        <h3 className="w-[48px] h-[24px] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
          {name}
        </h3>
        {/* Icon */}
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z" fill="black" />
        </svg>
      </Link>
    </>
  );
};

export default BreadCrumsItem;
