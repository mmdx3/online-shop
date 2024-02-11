const useNumberWithCommas = () => {
  function numberWithCommas(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return { numberWithCommas };
};

export default useNumberWithCommas;
