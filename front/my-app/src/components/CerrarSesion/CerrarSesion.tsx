import Link from "next/link";
import React from "react";
import Image from "next/image";
// import CarritoImg from "@/assets/carrito.svg";
import { useAuth } from "../../app/context/context";
import Cookies from "js-cookie";

export const CerrarSesion: React.FC = () => {
  const { token } = useAuth();

  const handleSignOff = () => {
    Cookies.remove("token");
    window.location.href = "/";
    console.log(token);
  };
  console.log(token);

  return (
    <>
      {token === null ? (
          <div className="w-full sm:h-full flex flex-col justify-evenly items-center">
            <Link href="/auth/login">
              <button className="text-white font-bold  text-lg hover:text-violeta font-tituloNav">
                Login
              </button>
            </Link>{" "}
            <Link href="/auth/register">
              <button className="text-white font-bold  text-lg hover:text-violeta font-tituloNav">
                Register
              </button>
            </Link>{" "}
          </div>
        
      ) : (
          <div className="w-full sm:h-full flex flex-col justify-evenly items-center">
            <Link href="/orders">
              <button className="text-white font-bold  text-lg hover:text-violeta font-tituloNav">
                Orders
              </button>
            </Link>{" "}
            <button
              onClick={handleSignOff} className="text-white font-bold  text-lg hover:text-violeta font-tituloNav">
              Sign Out
            </button>
          </div>
      )}
    </>
  );
};

export default CerrarSesion;