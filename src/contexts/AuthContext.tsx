import React, { useContext, createContext, useState } from "react";

interface IAuthState {
  newAccessToken: string;
  newRefreshToken: string;
  newExpiresAt: string;
}

interface IAuthContext {
  accessToken: string;
  isLoggedIn(): boolean;
  isAccessTokenExpired(): boolean;
  setAuthState(newAuthState: Partial<IAuthState>): void;
}

const AuthContext = createContext<IAuthContext>({
  accessToken: "",
  isLoggedIn: () => false,
  isAccessTokenExpired: () => true,
  setAuthState: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export const AuthProvider: React.FC = ({ children }) => {
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

  const setAuthState = (newAuthState: Partial<IAuthState>) => {
    const { newAccessToken, newRefreshToken, newExpiresAt } = newAuthState;
    // todo: consider usage single object or useReducer?
    if (newAccessToken) {
      setAccessToken(newAccessToken);
    }
    if (newRefreshToken) {
      setRefreshToken(refreshToken);
    }
    if (newExpiresAt) {
      setExpiresAt(expiresAt);
    }
  };

  const isAccessTokenExpired = () => {
    return new Date(expiresAt).getTime() <= new Date().getTime();
  };

  /**
   * @returns {Boolean} true/false based on accessToken and validity of expiration time
   */
  const isLoggedIn = () => {
    const accessTokenIsValid = accessToken.trim() !== "";
    const expirationTimeIsValid = expiresAt.trim() !== "";

    return (
      accessTokenIsValid && expirationTimeIsValid && !isAccessTokenExpired()
    );
  };

  const value = { accessToken, isLoggedIn, isAccessTokenExpired, setAuthState };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
