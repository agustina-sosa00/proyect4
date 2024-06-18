import React from 'react'
import Navbar from '@/components/Navbar/Navbar';
import CardProducts from '../../components/Cards/cards';
import Footer from '../../components/Footer/Footer';
import Banner from '@/components/Banner/Banner';
import { useAuth } from '../context/context';


export const Home: React.FC = () => {
  return (
    <>
      <Banner/>
      <CardProducts/>
    </>
  )
  
}

export default Home; 