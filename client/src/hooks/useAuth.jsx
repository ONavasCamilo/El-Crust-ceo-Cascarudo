import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { userStore } from "../store/store";
import { jwtDecode } from "jwt-decode";
import { route } from "preact-router";

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
    const decodedToken = jwtDecode(data.token);
    setUser(({ isLoggedIn: true, role: decodedToken.role.role, id: decodedToken.id, token: data.token }));
    route("/profile-user")
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