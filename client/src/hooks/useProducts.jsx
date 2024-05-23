import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { userStore } from "../store/store";

const useProducts = () => {
  const getProductsFromAPI = async () => {
    const res = await axios("api/products");
    return res.data;
  };

  const postCreateProductFromAPI = async (body) => {
    const { user } = userStore.getState();
    const token = user.token
    const res = await axios.post("api/products/create", body, {
      headers: {
        Authorization: token,
      },
    });
    return res.data;
  };

  const createProductSucess = (data) => {
    console.log("creado", data);
  };

  const createProductMutation = useMutation({
    mutationFn: (body) => postCreateProductFromAPI(body),
    onSuccess: createProductSucess,
    onError: (error) => {
      console.error("Error al crear el producto:", error);
    },
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
    createProduct,
  };
};

export default useProducts;
