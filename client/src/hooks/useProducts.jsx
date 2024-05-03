import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getProductsFromAPI = async () => {
  const res = await axios("http://localhost:3001/api/products");
  return res.data;
};

const useProducts = () => {
  const query = useQuery({ queryKey: ["test"], queryFn: getProductsFromAPI, refetchOnWindowFocus: false });
  return query;
}

export default useProducts