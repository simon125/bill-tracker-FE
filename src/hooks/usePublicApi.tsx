import React from "react";
import axios from "axios";

import { useMutation } from "react-query";

interface IObj {
  username: string;
  emailAddress: string;
  password: string;
}

interface IUsePublicApi {
  signUp: (obj: IObj) => void;
  signIn: (email: string, password: string) => void;
}

export const usePublicApi = (
  onSuccess: (test: unknown) => void,
  onError: (msg: string) => void
): IUsePublicApi => {
  //   const signUp = async (username: string, email: string, password: string) =>
  //     axios.post("http://localhost:5000/", {
  //       username,
  //       email,
  //       password,
  //     });
  interface IData {
    username: string;
    emailAddress: string;
    password: string;
  }

  const mutation = useMutation(
    (data: IData) =>
      fetch("http://localhost:5000/identity/user/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then(() => "works"),
    {
      onSuccess,
      onError,
    }
  );

  const signUp = mutation.mutate;

  const signIn = (email: string, password: string) => {
    console.log(email, password);
  };

  return { signUp, signIn };
};
