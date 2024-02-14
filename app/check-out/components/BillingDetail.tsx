import React from "react";
import CountrySelect from "./CuntrySelect";

const BillingDetail = () => {
  return (
    <div className="w-[608px] h-[1714px] flex flex-col justify-start items-start py-[25px] gap-[35px] ">
      <h3 className="font-[600] text-[36px] text-[#000000]">Billing details</h3>

      {/* Inputs */}
      <div className="flex justify-between items-center w-[453px] h-[121px]">
        {/* First Name */}
        <div className="w-[212px] h-[121px] flex flex-col justify-between items-start ">
          <h3 className="font-[500] text-[16px] text-[#000000]">First Name</h3>
          <input
            type="text"
            name="First_name"
            id="firstname"
            className="w-[211px] h-[75px] rounded-[10px] border border-[#9F9F9F] bg-[#ffffff] outline-none px-[25px]"
          />
        </div>
        {/* Last Name */}
        <div className="w-[212px] h-[121px] flex flex-col justify-between items-start ">
          <h3 className="font-[500] text-[16px] text-[#000000]">Last Name</h3>
          <input
            type="text"
            name="Last_name"
            id="lastname"
            className="w-[211px] h-[75px] rounded-[10px] border border-[#9F9F9F] bg-[#ffffff] outline-none px-[25px]"
          />
        </div>
      </div>
      {/* Compony Name */}
      <div className="flex justify-between items-start w-[453px] h-[121px] flex-col">
        <h3 className="font-[500] text-[16px] text-[#000000]">
          Company Name (Optional)
        </h3>
        <input
          type="text"
          name="compony_name"
          id="componyname"
          className="w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] bg-[#ffffff] outline-none px-[25px]"
        />
      </div>
      {/* Country  */}
      <div className="flex justify-between items-start w-[453px] h-[121px] flex-col">
        <h3 className="font-[500] text-[16px] text-[#000000]">
          Country / Region
        </h3>
        <CountrySelect />
      </div>

      {/* Street address  */}
      <div className="flex justify-between items-start w-[453px] h-[121px] flex-col">
        <h3 className="font-[500] text-[16px] text-[#000000]">
          Street address
        </h3>
        <input
          type="text"
          name="Street_address"
          id="Street_address"
          className="w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] bg-[#ffffff] outline-none px-[25px]"
        />
      </div>
      {/* Town / City */}
      <div className="flex justify-between items-start w-[453px] h-[121px] flex-col">
        <h3 className="font-[500] text-[16px] text-[#000000]">Town / City</h3>
        <input
          type="text"
          name="town_city"
          id="town_city"
          className="w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] bg-[#ffffff] outline-none px-[25px]"
        />
      </div>
      {/* Zip Code  */}
      <div className="flex justify-between items-start w-[453px] h-[121px] flex-col">
        <h3 className="font-[500] text-[16px] text-[#000000]">Zip code</h3>
        <input
          type="text"
          name="Zip_code"
          id="Zip_code"
          className="w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] bg-[#ffffff] outline-none px-[25px]"
        />
      </div>
      {/* Phone  */}
      <div className="flex justify-between items-start w-[453px] h-[121px] flex-col">
        <h3 className="font-[500] text-[16px] text-[#000000]">phone</h3>
        <input
          type="text"
          name="phone"
          id="phone"
          className="w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] bg-[#ffffff] outline-none px-[25px]"
        />
      </div>
      {/* email  */}
      <div className="flex justify-between items-start w-[453px] h-[121px] flex-col">
        <h3 className="font-[500] text-[16px] text-[#000000]">Email address</h3>
        <input
          type="email"
          name="email"
          id="email"
          className="w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] bg-[#ffffff] outline-none px-[25px]"
        />
      </div>
      <div className="flex justify-between items-start w-[453px] h-[121px] flex-col">
        <input
          type="text"
          className="w-[453px] h-[75px] rounded-[10px] border border-[#9F9F9F] bg-[#ffffff] outline-none px-[25px]"
          placeholder="Additional information"
        />
      </div>
    </div>
  );
};

export default BillingDetail;
