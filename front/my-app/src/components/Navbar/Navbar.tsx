"use client";

import React from "react";
import Link from "next/link";
import MenuH from '../../assets/bars-solid.svg'
import close from '../../assets/close.svg'
import carrito2 from '../../assets/bag-shopping-solid (1).svg'
import loginBlanco from '../../assets/loginB.svg'
import logo from '../../assets/Logo1-Photoroom.png'
import Image from "next/image";
import { useState } from "react";
import CerrarSesion from "../CerrarSesion/CerrarSesion";


const Navbar: React.FC = () => {

  const [menuH, setMenuH] = useState(false)
  const [menuUser, setMenuUser] = useState(false)


  const handleOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setMenuH(!menuH);
  }

  const handleOnClickUser = (event: React.MouseEvent)  => {
    event.preventDefault();
    setMenuUser(!menuUser);
    console.log( 'claro que si')

  }


    return (
      <div>
        {/* container general */}
        <div className='w-full h-20 bg-lila flex justify-evenly items-center'>
          
          {/* container botonera */}
          <div className='hidden sm:w-1/4  sm:flex justify-evenly items-center'>
            <Link href='/'><button className=" text-white text-lg hover:text-slate-500 font-tituloNav">Home</button></Link>
            <Link href='/about'><button className="text-white text-lg hover:text-slate-500 font-tituloNav">About</button></Link>
            <Link href='/products'><button className="text-white text-lg hover:text-slate-500 font-tituloNav">Products</button></Link>
            
            
          </div>

          {/* container logo */}
          <div className='sm:w-1/4 h-20'>
            <Image src={logo} alt="" className="mx-auto h-[79px]"/>
          </div>

          {/* container busqueda */}
          <div className='hidden sm:block justify-center items-center sm:w-[200px] sm:h-6 border rounded-lg'>
            <input type="search" className="sm:w-[170px] bg-white rounded-lg" placeholder="Search..."/>
            <button className="">🔍</button>
          </div>

          {/* container login */}
          <div className="hidden sm:flex w-[70px] justify-between">
            <Link href=''><button><Image src={carrito2} alt="" className="w-6 "/></button></Link>
            {
            menuUser === false ? <button onClick={handleOnClickUser}><Image src={loginBlanco} alt="" className="w-6 "/></button>: <button onClick={handleOnClickUser}><Image src={close} alt="" className="w-6 "/></button>
            }
            {
            menuUser === true ? (<div className="w-[180px] h-40 absolute right-0 bg-lila flex flex-col items-center justify-evenly mt-[57px] "> <CerrarSesion/> </div>) : null
            }
          </div>

          {/* menu hamburguesa */}
          
          {
            menuH === false ? (<div className="w-1/2 mr-6 flex justify-end sm:hidden">
            <button onClick={handleOnClick} className="rigth-0"><Image src={MenuH} alt="" className="w-6 "/></button>
          </div>) : (<div className="w-1/2 mr-6 flex justify-end sm:hidden">
            <button onClick={handleOnClick} className="rigth-0"><Image src={close} alt="" className="w-6 "/></button>
          </div>) 
          }
          

        </div>
        
        {/* container del menu hamburguesa */}
        {
          menuH === true ? (<div className="w-[180px] h-80 absolute right-0 bg-lila flex flex-col items-center justify-evenly sm:hidden">
          <Link href='/'><button className="text-white text-lg hover:text-violeta font-tituloNav">Home</button></Link>
          <Link href='/about'><button className="text-white text-lg hover:text-violeta font-tituloNav">About</button></Link>
          <Link href='/products'><button className="text-white text-lg hover:text-violeta font-tituloNav">Products</button></Link>
          <div className="w-full flex justify-evenly">
            <Link href=''><button ><Image src={carrito2} alt="" className="w-6 " /></button></Link>
          </div>
          <CerrarSesion/>
        </div>) : null }
      </div>
    )
}
export default Navbar


