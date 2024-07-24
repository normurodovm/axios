import React from "react";
import { request } from "../config/request";
import { useLoading } from "../hooks/useLoading";

export const Card = ({ title, description, id, refetch }) => {
  const { isloading, endload, onload } = useLoading();
  const deleteItem = () => {
    onload();
    request
      .delete(`/todos/${id}`)
      .then((res) => {
        refetch();
      })
      .finally(() => {
        endload();
      });
  };

  const editCards = () => {
    const newTitle = prompt("", title);
    const newDescription = prompt("", description);
    request
      .put(`/todos/${id}`, { title: newTitle, description: newDescription })
      .then((res) => {
        refetch();
      });
  };
  return (
    <div>
      {isloading && <h1>Loading....</h1>}
      <>
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={deleteItem}>delete</button>
        <button onClick={editCards}>edit</button>
      </>
    </div>
  );
};
