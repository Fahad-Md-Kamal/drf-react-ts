import React from "react";
import { useForm } from "react-hook-form";
import { useSignin } from "../../hooks/useSignin";
import { TodoResponse } from "../../types/todos";

type Props = {};

const Login = (props: Props) => {
  const { form, isLoading, onSubmit } = useSignin();
  const { register, handleSubmit } = form;

  return (
    <div className="max-w-full sm:mx-auto sm:max-w-[300px] sm:py-10">
      <form
        className="grid grid-cols-1 gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input placeholder="JhonDoe" {...register("username")} />
        <input {...register("password", { required: true })} />
        <button type="submit" disabled={isLoading}>
          submit {isLoading && "....."}
        </button>
      </form>
    </div>
  );
};

export default Login;
