import React from 'react'
import banner from '../../assets/Banner.png'
import Image from 'next/image'
import styles from '../Cards/Cards.module.css'

export const Banner: React.FC = () => {
  return (

    <div className={styles.bgBanner}>
        <Image src={banner} alt="" />
    </div>
    
  )
}

export default Banner;