"use client";
import React, { useEffect, useState } from "react";
import { IOrder } from "@/types";
import { useAuth } from "../context/context";
import {getOrders} from "@/helpers/getOrders";
import styles from '../../components/Cards/Cards.module.css'
import Link from "next/link";

const Orders: React.FC = () => {
  const { token } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (token) {
          const fetchedOrders = await getOrders(token);
          setOrders(fetchedOrders);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [token]);


  return (
    <>
    <div className={styles.bgOrders}>
      {
        orders.length > 0 ? <div className="w-95% min-h-screen flex flex-col justify-evenly items-center">
        {
           orders.map((order) => (
          <div key={order.id} className="w-[95%] flex-col sm:w-[800px] sm:h-[100px] bg-rosaClaro flex sm:flex-row justify-evenly items-center rounded mb-1">
            <p className="font-tituloNav text-xl text-violeta text-center">Number order: {order.id} </p>
            <p className="font-tituloNav text-xl text-violeta text-center">Products: {order.products.length} </p>
            <p className="font-tituloNav text-xl text-violeta text-center">Status: {order.status} </p>
            <p className="font-tituloNav text-xl text-violeta text-center">Date: {order.date} </p>
          </div>
        ))} 
        
      </div> : <div className="w-95% min-h-screen flex flex-col justify-evenly items-center">
        <div className="h-[150px]">
          <p className="font-tituloNormal text-white text-center font-bold text-2xl">You have no orders. </p> 
        <p className="font-tituloNormal text-white text-center font-bold text-2xl">Dont miss the offers on Tuesdays and Thursdays with a 30% off on smartphones</p>
        </div>
        
        <Link href='/products'><button className="text-white text-lg hover:text-violeta font-tituloNav bg-lila rounded border">See Products</button></Link>
        </div>}
      </div>
      
       
    
      
    </>
  );
};

export default Orders;