import Product from "../Product";

const OurProduct = () => {
  return (
    <div className="w-[1236px] min-h-[1084px] flex flex-col justify-center items-center gap-[25px] mt-[25px] mx-auto">
      {/* Title */}
      <h2 className="w-[269px] h-[48px] font-[700] text-[30px] leading-[38px] text-center">
        Our Products
      </h2>

      {/* products */}
      <div className="flex flex-row justify-start items-center w-full text-wrap flex-wrap gap-[32px]">
        {/* Product */}
        <Product />
      </div>

      {/* Show More Btn */}
      {/* Todo Navigate to Shop */}
      <button className="w-[245px] h-[48px] border-[1px] border-[#B88E2F] flex justify-center items-center text-center rounded-[5px] my-[15px]">
        <span className="w-[89px] h-[24px] font-[600] text-[16px] leading-[24px] text-[var(--text-primary)]">
          Show More
        </span>
      </button>
    </div>
  );
};

export default OurProduct;
