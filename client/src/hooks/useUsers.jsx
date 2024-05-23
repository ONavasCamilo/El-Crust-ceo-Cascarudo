import axios from "axios";
import { userStore } from "../store/store";
import { useQuery } from "@tanstack/react-query";

const useUsers = () => {

  const getAllUsers = async () => {
    const { user } = userStore.getState();
    const token = user.token;

    const response = await axios("api/users", {
      headers: {
        Authorization: token,
      },
    });
    return response.data;
  };

  const users = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
    refetchOnWindowFocus: false,
  })

  return users
};

export default useUsers;
