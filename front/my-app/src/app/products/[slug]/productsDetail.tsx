import React from 'react'
import getProductsAPI from '@/helpers/solicitudGet';
import { ProductParams } from '@/types';
import ImagenesProducts from '@/helpers/imgProducts';
import Image from 'next/image';
import styles from '../../../components/Cards/Cards.module.css'
import BotonOrder from '@/components/BotonOrder/BotonOrder';

export const products = async ({params}: {params: ProductParams}) => {
  
  const product = await getProductsAPI();
  const id: number = Number(params.slug)

  return (
    <div className={styles.bgCards}>

      {
        product.map((element) => (
          element.id ===  id ? 
          <div key={element.id} className='w-[90%] min-h-screen mx-auto mt-3 flex flex-col justify-evenly items-center sm:flex-row-reverse md:justify-center'>
            {
              ImagenesProducts.map((imagen)=>
                imagen.id === element.id ?  <Image src={imagen.img} alt='' key={imagen.id} className='w-[180px] h-[200px] sm:w-[290px] sm:h-[260px]'/>  : null
              )
            }
            <div className='sm:w-[500px]'>
              <h2 className='text-center text-4xl font-textNormal font-extrabold'>{element.name}</h2>
              <p className='text-center  text-2xl font-textNormal font-bold p-3 text-gray-600'>Description: <br/> {element.description}</p>
              <p className='text-center text-2xl font-textNormal font-bold text-gray-600'>Stok: <br/>{element.stock}</p>
              <p className='text-center text-2xl font-textNormal p-2 font-bold text-violeta'>${element.price}</p>
              <div className='w-full flex justify-center items-center'>
                <BotonOrder id= {id}/>
              </div>
            </div>
            
          </div> : null)
        )
      }
    </div>
  )
}

export default products;