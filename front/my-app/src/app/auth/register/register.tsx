"use client";
import React, { useEffect } from 'react';
import styles from '../../../components/Cards/Cards.module.css';
import { useState } from 'react';
import { ValidateRegister } from '@/helpers/validate';
import axios from 'axios';
import Image from 'next/image';
import verPass from '../../../assets/verPass.svg';
import ocultarPass from '../../../assets/ocultarPass.svg';
import { IUser } from '@/types';

const Register: React.FC = () => {

  const [registerForm, setRegisterForm] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    address?: string;
    phone?: string;
  }
  
  const [error, setError] = useState<FormErrors>({});

  const [inputPassword, setInputPassword] = useState(false)


  useEffect(()=>{
    const errors = ValidateRegister(registerForm)
    setError(errors)
  }, [registerForm])

  const handleOnChangeInput = () => {
    setInputPassword(!inputPassword)
  }

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    setRegisterForm({
      ...registerForm,
      [name]: value,
    });

  };

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3001/users/register",
        registerForm
      );
      const data = res.data;
      console.log("data axios=========>", data);

      window.location.href = '/auth/login'
      return data;
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className={styles.bgCards}>
        <div className='w-full min-h-screen sm:h-[600px] flex justify-center items-center'>
            <form onSubmit={handleOnSubmit} action="" className='w-[300px] h-[450px] sm:w-[500px] sm:h-[500px] mx-auto flex flex-col justify-evenly items-center bg-white rounded'>
            <h2 className='text-center text-4xl font-tituloNav'>Register</h2>
                <input type="text" name='name' value={registerForm.name} onChange={handleOnChange} placeholder='Name..' className='w-[90%] h-10 border'/>
                {error.name ? <p className='text-violeta font-tituloNav'>{error.name}</p> : null}
                
                <input type="email" name='email' value={registerForm.email} onChange={handleOnChange} placeholder='Email..' className='w-[90%] h-10 border'/>
                {error.email ? <p className='text-violeta font-tituloNav'>{error.email}</p> : null}
                
                <div className='w-[90%] flex justify-between'>
                  <input type={inputPassword  ? 'text' : 'password'} name='password' value={registerForm.password} onChange={handleOnChange}  placeholder='Password..' className='w-[90%] h-10 border'/>{!inputPassword ? <button onClick={handleOnChangeInput}><Image src={verPass} alt="" className='w-[20px]'/></button> : <button onClick={handleOnChangeInput}><Image src={ocultarPass} alt="" className='w-[20px]'/></button>} 
                  {error.password ? <p className='text-violeta font-tituloNav'>{error.password}</p> : null}                
                </div>
                
                <input type="text" name='address' value={registerForm.address} onChange={handleOnChange} placeholder='Address..' className='w-[90%] h-10 border'/>
                {error.address ? <p className='text-violeta font-tituloNav'>{error.address}</p> : null}
                
                <input type="text" name='phone' value={registerForm.phone} onChange={handleOnChange} placeholder='Phone..' className='w-[90%] h-10 border'/>
                {error.phone ? <p className='text-violeta font-tituloNav'>{error.phone}</p> : null}

                <button disabled={Object.keys(error).length > 0} className='w-[110px] h-[40px] bg-lila text-white rounded-full'>Register</button>

                <p>¿Do you already have an account? <a href="/auth/login" className='text-violeta'> Enter </a></p>
            </form>
        </div>
    </div>
    
  )
}

export default Register;