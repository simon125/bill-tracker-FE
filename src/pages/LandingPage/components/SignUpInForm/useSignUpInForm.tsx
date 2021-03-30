import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export enum AuthForm {
  SIGN_UP = "SIGN_UP",
  SIGN_IN = "SIGN_IN",
}

export type AuthFormInputs = {
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
  authForm: AuthForm;
};

const AUTH_FORM_SCHEMA = yup.object().shape({
  authForm: yup.string().nullable(true),
  email: yup.string().email().required(),
  username: yup.string().when("authForm", {
    is: AuthForm.SIGN_UP,
    then: yup.string().min(2).required(),
  }),
  password: yup.string().min(5).required(),
  confirmPassword: yup.string().when("authForm", {
    is: AuthForm.SIGN_UP,
    then: yup
      .string()
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  }),
});

export const useSignUpInForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
  } = useForm<AuthFormInputs>({
    resolver: yupResolver(AUTH_FORM_SCHEMA),
    defaultValues: {
      authForm: AuthForm.SIGN_UP,
    },
  });

  return { register, handleSubmit, errors, setError, clearErrors };
};
