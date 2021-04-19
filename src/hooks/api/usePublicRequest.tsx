// external
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
// internal
import { showErrorToast } from "utils/showToast";

const publicAxios = axios.create({ baseURL: process.env.REACT_APP_API_URL });

const { post } = publicAxios;

const onError = (msg: string) => {
  showErrorToast(msg);
};

interface SigngUpCredentials {
  emailAddress: string;
  userName: string;
  password: string;
}

interface IdentityResponse {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
}

export type IdentityAxiosResponse = AxiosResponse<IdentityResponse>;

const signUp = async (signUpCredentials: SigngUpCredentials) => {
  return await post<IdentityResponse>(
    "/identity/user/register",
    signUpCredentials
  );
};

export const useSignUpMutation = (
  onSuccess: (response: IdentityAxiosResponse) => void
) => {
  return useMutation(signUp, { onError, onSuccess });
};

interface SignInCredentials {
  emailAddressOrUserName: string;
  password: string;
}

const signIn = async (signInCredentials: SignInCredentials) => {
  return await post<IdentityResponse>(
    "/identity/user/login",
    signInCredentials
  );
};

export const useSignInMutation = (
  onSuccess: (response: IdentityAxiosResponse) => void
) => {
  return useMutation(signIn, { onError, onSuccess });
};

const signOut = () => {
  return post("/identity/token/revoke");
};

export const useSignOutMutation = () => {
  return useMutation(signOut, { onError });
};

const refreshToken = () => {
  return post<IdentityResponse>("/identity/token/refresh");
};

export const useRefreshTokenMutation = () => {
  return useMutation(refreshToken, { onError });
};
