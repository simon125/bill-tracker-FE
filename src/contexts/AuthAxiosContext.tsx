import React, { useContext, createContext } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useRefreshTokenMutation } from "hooks/api/usePublicRequest";
import { useAuth } from "./AuthContext";

interface IAuthAxiosContext {
  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
  remove<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<R>;
}

const AuthAxiosContext = createContext<IAuthAxiosContext>({
  get: axios.get,
  remove: axios.delete,
  post: axios.post,
  put: axios.put,
});

export const useAuthAxios = () => {
  const context = useContext(AuthAxiosContext);

  if (context === undefined) {
    throw new Error("useAuthFetch must be used within an FetchProvider");
  }

  return context;
};

export const AuthAxiosProvider: React.FC = ({ children }) => {
  const { accessToken, isAccessTokenExpired, setAuthState } = useAuth();

  const { mutate: refreshToken, data } = useRefreshTokenMutation();

  const authAxios = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      authorization: `Bearer ${accessToken}`,
    },
  });

  /**
   * @description silent access token refresh before api call
   */
  authAxios.interceptors.request.use(
    async (config) => {
      if (isAccessTokenExpired()) {
        await refreshToken();
        const newAccessToken = data?.data.accessToken;

        if (!newAccessToken) {
          throw new Error("Access deniend");
        }

        setAuthState({ newAccessToken });
        config.headers.authorization = `Bearer ${newAccessToken}`;
      }
      return config;
    },
    async (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  const responseInterceptor = authAxios.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      const { response } = error;

      if (response && response.status !== 401 && !isAccessTokenExpired()) {
        axios.interceptors.response.eject(responseInterceptor);

        await refreshToken();
        const newAccessToken = data?.data.accessToken;

        if (!newAccessToken) {
          throw new Error("Access deniend");
        }

        setAuthState({ newAccessToken });

        const newAuthHeader = `Bearer ${newAccessToken as string}`;

        response.config.headers.authorization = newAuthHeader;
        authAxios.defaults.headers.authorization = newAuthHeader;

        return axios(response.config);
      }

      return Promise.reject(error);
    }
  );

  const { get, post, put, delete: remove } = authAxios;
  const value = { get, post, put, remove };

  return (
    <AuthAxiosContext.Provider value={value}>
      {children}
    </AuthAxiosContext.Provider>
  );
};
