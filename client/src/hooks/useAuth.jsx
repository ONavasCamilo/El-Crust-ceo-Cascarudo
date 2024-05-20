import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { userStore } from "../store/store";

const useAuth = () => {
  const loginUser = async (body) => {
    const res = await axios.post("api/users/login", body);
    return res.data;
  };

  const registerUser = async (body) => {
    const res = await axios.post("api/users/register", body);
    return res.data;
  }

  const onAuthSuccess = async (data) => {
    setUser(({ token: data.token }));
  }

  const { setUser } = userStore((state) => state);
  const loginMutation = useMutation({ mutationFn: (body) => loginUser(body), onSuccess: onAuthSuccess });

  const registerMutation = useMutation({ mutationFn: (body) => registerUser(body), onSuccess: onAuthSuccess });

  const login = (body) => {
    loginMutation.mutate(body)
    return loginMutation;
  }

  const register = (body) => {
    registerMutation.mutate(body);
    return registerMutation;
  }

  return {
    login,
    loginError: loginMutation.error,
    register,
    registerError: registerMutation.error
  }
}

export default useAuth