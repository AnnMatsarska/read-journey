import axios from "axios";
import { IUserCredentials } from "../types";

axios.defaults.baseURL = "https://readjourney.b.goit.study/api";

export const setToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  axios.defaults.headers.common.Authorization = "";
};

//==========================Authorization

export const signUp = async (formData: IUserCredentials) => {
  const { data } = await axios.post("/users/signup", formData);
  setToken(data.token);
  return data;
};

export const signIn = async (formData: IUserCredentials) => {
  const { data } = await axios.post("/users/signin", formData);
  setToken(data.token);
  return data;
};

export const signOut = async () => {
  await axios.post("/users/signout");
};

export const getCurrentUser = async () => {
  const { data } = await axios("/users/current");

  return data;
};

// export const refreshTokensApi = async (oldRefreshToken: string) => {
//   const { data } = await axios.post("/users/refresh", {
//     refreshToken: oldRefreshToken,
//   });
//   return data;
// };
