"use client";
import React from "react";
import { useAuth } from "../../app/context/context";
import { createOrder } from "../../helpers/getOrders";

export const BotonOrder = ({id} : {id: number}) => {
  const { token } = useAuth();

  const idParams: number = id;

  console.log(id);

  const handleAdd = async () => {
    try {
      if (!token) {
        throw new Error("No token provided");
      }

      await createOrder([idParams], token);

      alert("successful order");
      window.location.href = "/orders";

      console.log("Order created successfully");
    } catch (error) {
      alert("To order you must log in");
      window.location.href = "/auth/login";
      console.error("error creating order");
    }
  };

  return (
    <>
      <button onClick={handleAdd} className='w-[110px] h-[40px] bg-lila text-white rounded-full'>Add</button> 
    </>
  );
};

export default BotonOrder;