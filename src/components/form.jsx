import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../config/request";
import "../components/form.css"
export const Form = ({ refetch }) => {
  const { handleSubmit, register, formState, reset } = useForm();
  const submit = (data) => {
    request
      .post("/todos", data)
      .then((res) => {
    
        reset();
        refetch();
      })
      .finally(() => {});
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <input className="input1" {...register("title")} type="text" />
      </div>
      <div>
        <input className="input2" {...register("description")} type="text" />
      </div>
      <button className="send" type="submit">send</button>
    </form>
  );
};
