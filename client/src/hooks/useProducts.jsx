import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { jwtDecode } from "jwt-decode";

const useProducts = () => {
  const getProductsFromAPI = async () => {
    const res = await axios("api/products");
    return res.data;
  };

  const postCreateProductFromAPI = async (body) => {
    const res = await axios.post("api/products/create", body);
    return res.data;
  };

  const createProductSucess = () => {
    // jwtDecode(data.token)
    console.log("creado");
  };

  const createProductMutation = useMutation({
    mutationFn: (body) => postCreateProductFromAPI(body),
    onSuccess: createProductSucess,
    onError: (error) => {
      console.error("Error al crear el producto:", error);
    }
  });

  const createProduct = (body) => {
    createProductMutation.mutate(body);
    return createProductMutation;
  };

  const products = useQuery({
    queryKey: ["products"],
    queryFn: getProductsFromAPI,
    refetchOnWindowFocus: false,
  });

  return {
    products,
    createProduct
  }
};

export default useProducts;
