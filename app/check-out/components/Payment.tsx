import React from "react";

const Payment = () => {
  return (
    <div className="w-[608px] h-[789px] flex justify-center items-center gap-[15px]">
      <div className="w-[533px] h-[646px] rounded-[15px] flex flex-col justify-start items-start gap-[25px]">
        <div className="w-full flex justify-between ">
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <h3 className="font-[500] text-[24px] text-[#000000]">Product </h3>
            <div className=" flex gap-[10px] items-center">
              <span className="font-[400] text-[16px] text-[#9F9F9F]">
                Asgaard sofa
              </span>
              <span className="font-[500] text-[12px] text-[#000000]">X</span>
              <span className="font-[500] text-[12px] text-[#000000]">1</span>
            </div>
            <h3 className="font-[400] text-[16px] text-[#000000]">Subtotal </h3>
            <h3 className="font-[500] text-[24px] text-[#000000]">Total </h3>
          </div>
          <div className="flex flex-col items-start justify-start gap-[15px]">
            <h3 className="font-[500] text-[24px] text-[#000000]">Subtotal </h3>
            <span className="font-[300] text-[16px] text-[#9F9F9F]">
              Rs. 250,000.00
            </span>
            <h3 className="font-[400] text-[16px] text-[#000000]">
              Rs. 250,000.00{" "}
            </h3>
            <h3 className="font-[500] text-[24px] text-[#B88E2F]">
              Rs. 250,000.00{" "}
            </h3>
          </div>
        </div>
        <div className="w-[527px] border border-[#D9D9D9] mt-[15px]"></div>

        <div className="w-[528px] h-[107px] flex flex-col justify-between items-start ">
          <div className="flex gap-[15px] items-center">
            <div className="size-[14px] bg-[#000000] rounded-full "></div>
            <h3 className="w-[160px] font-[400] text-[16px] text-[#000000]">
              Direct Bank Transfer
            </h3>
          </div>
          <p className="w-[528px] h-[72px] font-[300] text-[16px] text-justify text-[#9F9F9F]">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>

        <div className="w-[191px] h-[24px] flex gap-[15px] items-center">
          <div className="size-[14px] border border-[#9F9F9F] rounded-full "></div>
          <h3 className="w-[160px] font-[400] text-[16px] text-[#000000]">
            Direct Bank Transfer
          </h3>
        </div>

        <div className="w-[191px] h-[24px] flex gap-[15px] items-center">
          <div className="size-[14px] border border-[#9F9F9F] rounded-full "></div>
          <h3 className="w-[160px] font-[400] text-[16px] text-[#000000]">
            Cash On Delivery
          </h3>
        </div>

        <p className="w-[529px] font-[600] text-[16px] text-justify text-[#797777]">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>

        <button className="w-[318px] h-[64px] rounded-[15px] border border-[#000000] mx-auto mt-[25px] ">
          <span className="font-[400] text-[20px] text-[#000000]">
            Place order
          </span>
        </button>
      </div>
    </div>
  );
};

export default Payment;
