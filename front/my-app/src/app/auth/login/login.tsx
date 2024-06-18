"use client"
import React, { useEffect } from 'react'
import styles from '../../../components/Cards/Cards.module.css';
import axios from 'axios';
import { ILoginErrors, ValidateLogin } from '@/helpers/validate';
import { useState } from 'react';
import Cookies from 'js-cookie';
import verPass from '../../../assets/verPass.svg'
import ocultarPass from '../../../assets/ocultarPass.svg'
import Image from 'next/image';
import { IProfile } from '@/types';




const Login: React.FC = () => {
const APIURL = process.env.NEXT_PUBLIC_API_URL

  const [loginForm, setLoginForm] = useState<IProfile>({
    email: '',
    password: ''
  });

  const [inputPassword, setInputPassword] = useState(false)

  const [error, setError] = useState<ILoginErrors>({email: '',
  password: ''})

  useEffect(()=>{
    const errors = ValidateLogin(loginForm)
    setError(errors)
  }, [loginForm])

  const handleOnChangeInput = (event: React.MouseEvent) => {
    event.preventDefault()
    setInputPassword(!inputPassword)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${APIURL}/users/login`,
        
        loginForm
      );
      const data = res.data;
      console.log("data de axios=========>", data);

      setLoginForm({
        email: "",
        password: "",
      });

      const token = data.token;

      Cookies.set("token", token, { secure: true, sameSite: "strict" });
      console.log('--------------------> token login',token)
      window.location.href = '/'
      return data;
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className={styles.bgCards}>
        <div className='w-full min-h-screen sm:h-[600px] flex justify-center items-center'>
            <form onSubmit={handleOnSubmit} action="" className='w-[300px] h-[450px] sm:w-[500px] sm:h-[300px] mx-auto flex flex-col justify-evenly items-center bg-white rounded'>
            <h2 className='text-center text-4xl font-tituloNav'>Login</h2>
                <input type="email" name='email' value={loginForm.email} onChange={handleOnChange} placeholder='Email..' className='w-[90%] h-10 border'/>
                {error.email ? <p className='text-violeta font-tituloNav'>{error.email}</p> : null}
            <div className='w-[90%] flex justify-between'>
              <input type={!inputPassword  ? 'password' : 'text'} name='password' value={loginForm.password} onChange={handleOnChange}  placeholder='Password..' className='w-[90%] h-10 border'/>{!inputPassword ? <button onClick={handleOnChangeInput}><Image src={verPass} alt="" className='w-[20px]'/></button> : <button onClick={handleOnChangeInput}><Image src={ocultarPass} alt="" className='w-[20px]'/></button>}             
            </div>
            {error.password ? <p className='text-violeta font-tituloNav'>{error.password}</p>: null} 
                
                
                    <button disabled={Object.keys(error).length > 0} className='w-[110px] h-[40px] bg-lila text-white rounded-full'>Login</button>
                    
                <p>¿You do not have an account? <a href="/auth/register" className='text-violeta'> Sign up</a></p>
            </form>
        </div>
    </div>
    
  )
}

export default Login;