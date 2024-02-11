import ISproductService from "@/Types/ProductType";
import axios from "axios";

type responseType = {
  data: {
    data: ISproductService;
  };

  message: string;
  error: string;
};
export default async function GetSingleProduct(
  url: string,
): Promise<responseType> {
  const res: responseType = await axios.get(url);
  return res;
}
