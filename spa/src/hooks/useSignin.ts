import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TodoResponse } from "../types/todos";

interface LoginInputs {
  username: string;
  password: string;
}

interface LoginPayload {
  username: string;
  password: string;
}

export const useSignin = () => {
  const form = useForm<LoginInputs>();

  const { isLoading, mutate } = useMutation(
    async (payload: LoginPayload) => {
      const response = await fetch("http://localhost:8000/api/todos/");
      const data: TodoResponse = await response.json();
      return data;
    },
    {
      onSuccess: (data) => {
        console.table(data.result);
      },
      onError: (error: Error) => {
        console.log(error);
      },
    }
  );

  const onSubmit = async (values: LoginInputs) => {
    mutate({ username: values.username, password: values.password });
  };

  return { isLoading, form, onSubmit };
};
