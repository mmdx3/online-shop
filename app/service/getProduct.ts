import axios from "axios";
export default async function GetProduct(url: string) {
  try {
    const res = await axios.get(url);
    return res;
  } catch (e) {
    console.log(e);
  }
}
