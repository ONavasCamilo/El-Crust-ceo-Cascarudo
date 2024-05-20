import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { userStore } from "../store/store";

const useAuth = () => {
  const loginUser = async (body) => {
    const res = await axios.post("api/users/login", body);
    return res.data;
  };
  
  const onLoginSuccess = async (data) => {
    setUser(({ token: data.token }));
  }

  const { setUser } = userStore((state) => state);
  const loginMutation = useMutation({ mutationFn: (body) => loginUser(body), onSuccess: onLoginSuccess });

  const login = (body) => {
    loginMutation.mutate(body)
    return loginMutation;
  }

  return { login, loginError: loginMutation.error }
}

export default useAuth