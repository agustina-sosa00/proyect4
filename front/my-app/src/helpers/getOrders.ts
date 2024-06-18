"use client";
import { useEffect } from "react";
import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const createOrder = async (products: number[], token: string) => {
  try {
    if (!products.length) {
      throw new Error("No products in the order");
    } else if (!token) {
      throw new Error("No token provided");
    } else if (!apiUrl) {
      throw new Error("No API URL provided");
    }

    // le pasamos tres argumentos: 1- es la url del back 2- le pasamos proucts que es el array de products que vino de los parametros 3- es un obj con uuna propiedad headers, de valor tiene un objcon una propiedad autization y de valor el token.

    const response = await axios.post(
      `${apiUrl}/orders`,

      { products: products },
      {
        headers: {
          Authorization: token,
        },
      }
    );

    return response.data; 
  } catch (error) {
    throw error;
  }
};

export const getOrders = async (token: string) => {
  try {
    if (!token) {
      throw new Error("No token provided");
    } else if (!apiUrl) {
      throw new Error("No API URL provided");
    }

    const response = await axios.get(`${apiUrl}/users/orders`, {
      headers: {
        Authorization: token,
      },
    });
    return response.data; // Return the response data if needed
  } catch (error) {
    throw error;
  }
};