"use client";
import React from 'react'
import styled from 'styled-components'
import styles from './Cards.module.css'
import getProductsAPI from "../../helpers/solicitudGet";
import Link from 'next/link';
import ImagenesProducts from '@/helpers/imgProducts';
import Image from 'next/image';

const SecCards = styled.div`
    width: 100%;
    height: auto;
`

const Container = styled.div`
    width: 1200px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;

@media screen and (min-width: 1280px) {
}
@media screen and (max-width: 1279px) and (min-width: 769px) {
  width: 800px;
}
@media screen and (max-width: 768px) and (min-width: 501px) {
  width: 90%;
}
@media screen and (max-width: 500px) and (min-width: 0px) {
  width: 90%;
}
`

const ContainerCard = styled.div`
    width: 250px;
    height: 380px;
    margin: 10px ;
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center; 
    box-shadow: 0px 0px 5px 1px gray;
img{
  width: 150px;
height: 200px;
} 
@media screen and (max-width: 768px) and (min-width: 501px) {
  width: 200px;
  height: 350px;
  margin: 20px auto;
}
@media screen and (max-width: 500px) and (min-width: 0px) {
  width: 200px;
  height: 350px;
  margin: 20px auto;
}
`

const TitleCard = styled.h3`
text-align: center;
font-family: "Anek Tamil", sans-serif;
  font-optical-sizing: auto;
/* rgb(100 116 139 */
font-weight: 800;
color: #000; 
`

const PCard = styled.p`
text-align: justify;
padding: 10px;
`
const PCardPrecio = styled.p`
text-align: center;
`

export const CardProducts: React.FC = async () => {

  const products = await getProductsAPI()
   
  return (
    <div className={styles.bgCards}>
      <SecCards>
      <Container>
        {
          products.map((product) => {
            return(
              <ContainerCard key={product.id}>
                { ImagenesProducts.map((image) => image.id === product.id ? <Image src={image.img} alt='' key={image.id}/> : null) }
                <div>
                  <TitleCard>{product.name}</TitleCard>
                  <PCardPrecio>${product.price}</PCardPrecio>
                  <div className='w-full flex justify-center items-center'>
                    <Link href={`/products/${product.id}`} >
                    <button className='w-[110px] h-[40px] bg-lila text-white rounded-full '>Description</button>
                  </Link>
                  </div>
                  
                </div>
              </ContainerCard>
            )
          })
        }
      </Container>
    </SecCards>
    </div>
    
  )
}

export default CardProducts;
