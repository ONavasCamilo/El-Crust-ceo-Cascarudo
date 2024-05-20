import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getProductsFromAPI = async () => {
  const res = await axios("api/products");
  return res.data;
};

const useProducts = () => {
  const query = useQuery({ queryKey: ["products"], queryFn: getProductsFromAPI, refetchOnWindowFocus: false });
  return query;
}

export default useProducts