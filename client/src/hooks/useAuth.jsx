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
    const userData = {
      isLoggedIn: true,
      role: decodedToken.role.role,
      id: decodedToken.id,
      token: data.token
    };

    localStorage.setItem("user", JSON.stringify(userData));

    setUser(userData);
    route("/user-profile", true)
  }

  const getUserFromLocalstorage = () => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      return setUser({});
    }
    setUser(JSON.parse(userData));
  };

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

  const logout = () => {
    localStorage.removeItem("user");
    setUser({});
    route("/");
  }

  return {
    login,
    loginError: loginMutation.error,
    logout,
    register,
    registerError: registerMutation.error,
    getUserFromLocalstorage
  }
}

export default useAuth