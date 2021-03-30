import React, { useState } from "react";
import { useSignUpInForm, AuthForm, AuthFormInputs } from "./useSignUpInForm";
import { Input } from "components";
import { usePublicApi } from "hooks/usePublicApi";

export const SignUpInForm: React.FC = () => {
  const [authForm, setAuthForm] = useState<AuthForm>(AuthForm.SIGN_UP);

  const { register, handleSubmit, errors, clearErrors } = useSignUpInForm();

  const onSuccess = (test: unknown) => {
    console.log("JUPI");
    console.log(test);
    debugger;
  };

  const onError = (msg: string) => {
    console.error(msg);
    debugger;
  };

  const { signUp, signIn } = usePublicApi(onSuccess, onError);

  const onSubmit = handleSubmit(({ email, username, password, authForm }) => {
    if (authForm === AuthForm.SIGN_UP) {
      signUp({ username, emailAddress: email, password });
    } else {
      signIn(email, password);
    }
  });

  const handleChangeAuthForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthForm(e.target.value as AuthForm);
  };

  const handleOnInput = (e: React.FormEvent<HTMLInputElement>) => {
    clearErrors(e.currentTarget.name as keyof AuthFormInputs);
  };

  const isSignUp = authForm === AuthForm.SIGN_UP;
  const ANIMATED_HIDE_INPUT = {
    marginTop: isSignUp ? 0 : "-63px",
    opacity: isSignUp ? 1 : 0,
  };

  return (
    <form onSubmit={onSubmit}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          background: "rgba(49, 65, 80, 0.7)",
        }}
      >
        <div
          style={{
            paddingBottom: 20,
            position: "relative",
            zIndex: 11,
            marginBottom: 30,
          }}
        >
          <span
            style={{
              position: "absolute",
              borderBottom: "1px solid #34B2B4",
              width: "65.5px",
              top: "2.5rem",
              transition: "all 0.5s",
              transform: isSignUp ? "translateX(0)" : "translateX(75px)",
            }}
          ></span>
          <label
            htmlFor="signUp"
            style={{
              color: "#eee",
              width: 70,
              textAlign: "center",
              display: "inline-block",
            }}
          >
            SIGN UP
            <input
              checked={authForm === AuthForm.SIGN_UP}
              hidden
              onChange={handleChangeAuthForm}
              ref={register}
              type="radio"
              id="signUp"
              name="authForm"
              value={AuthForm.SIGN_UP}
            />
          </label>
          <label
            htmlFor="signIn"
            style={{
              color: "#eee",
              width: 70,
              textAlign: "center",
              display: "inline-block",
            }}
          >
            SIGN IN
            <input
              checked={authForm === AuthForm.SIGN_IN}
              hidden
              ref={register}
              onChange={handleChangeAuthForm}
              type="radio"
              id="signIn"
              name="authForm"
              value={AuthForm.SIGN_IN}
            />
          </label>
        </div>
        <Input
          inputRef={register}
          onInput={handleOnInput}
          name="username"
          id="username"
          label="USERNAME"
          error={errors.username?.message}
          inputWrapperStyle={ANIMATED_HIDE_INPUT}
        />
        <Input
          inputRef={register}
          onInput={handleOnInput}
          name="email"
          id="email"
          label="EMAIL"
          error={errors.email?.message}
        />
        <Input
          inputRef={register}
          onInput={handleOnInput}
          name="password"
          id="password"
          label="PASSWORD"
          type="password"
          error={errors.password?.message}
          inputWrapperStyle={{
            zIndex: 8,
          }}
        />
        <Input
          inputRef={register}
          onInput={handleOnInput}
          name="confirmPassword"
          id="confirmPassword"
          label="CONFIRM PASSWORD"
          type="password"
          error={errors.confirmPassword?.message}
          inputWrapperStyle={{
            ...ANIMATED_HIDE_INPUT,
            zIndex: 7,
          }}
        />
        <button
          type="submit"
          style={{
            whiteSpace: "nowrap",
            color: "#ffffff",
            background: "transparent",
            border: "#ffffff 1px solid",
            borderRadius: 0,
            padding: "10px",
            fontWeight: 400,
            fontSize: "1.2rem",
            display: "block",
            width: "100%",
            margin: "30px auto 0 auto",
          }}
        >
          <span
            style={{
              opacity: isSignUp ? 1 : 0,
              transition: "all 0.5s",
              display: "inline-block",
              transform: isSignUp ? "translateX(50%)" : "translateX(-20px)",
            }}
          >
            SIGN UP
          </span>
          <span
            style={{
              opacity: isSignUp ? 0 : 1,
              display: "inline-block",
              transition: "all 0.5s",
              transform: isSignUp ? "translateX(20px)" : "translateX(-50%)",
            }}
          >
            SIGN IN
          </span>
        </button>
      </div>
    </form>
  );
};
