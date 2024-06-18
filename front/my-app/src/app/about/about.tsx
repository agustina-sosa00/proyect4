import React from 'react'
import styles from '../../components/Cards/Cards.module.css'

export const about: React.FC = () => {
  return (
    <div className={styles.bgCards}>
        {/* <Image src={logo} alt='' className='w-[90%] mx-auto sm:w-[400px]'/> */}
        <div className='w-[90%] sm:min-h-screen mx-auto flex items-center flex-col justify-evenly'>
        {/* <img src="" alt="" /> */}
        <div className='w-full '>
                  <h3 className='text-center text-3xl font-tituloNav '>Donde la tecnología se encuentra con la conveniencia.</h3>
                  <hr />
        </div>
        <div className='w-full'>
              <p className='text-center font-textNormal'>En un mundo cada vez más interconectado por la tecnología, nace TecnoHub con la visión de ser el epicentro donde convergen la creatividad, la innovación y la pasión por la tecnología. Desde sus inicios, TecnoHub se ha comprometido a impulsar el progreso y la transformación digital, ofreciendo un espacio donde emprendedores, desarrolladores y entusiastas tecnológicos pueden colaborar, aprender y crear juntos.</p>
        </div>
        <div className='w-full'>
          <p className='text-center'>La historia de TecnoHub se remonta a un grupo de visionarios que compartían la creencia de que la tecnología tiene el poder de cambiar el mundo para mejor. Con este propósito en mente, fundaron TecnoHub como un lugar donde las mentes brillantes pueden reunirse para desarrollar ideas revolucionarias y dar vida a proyectos innovadores.</p>
        </div>
       
        <p className='text-center'>Desde entonces, TecnoHub ha crecido hasta convertirse en un vibrante ecosistema tecnológico, donde se llevan a cabo eventos, talleres y hackatones para fomentar la creatividad y el aprendizaje colaborativo. Además, TecnoHub ofrece recursos y apoyo a startups y empresas emergentes, ayudándolas a crecer y alcanzar su máximo potencial en un mundo cada vez más digitalizado.</p>
        <p className='text-center'>En TecnoHub, la innovación es el motor que impulsa todo lo que hacemos. Estamos comprometidos a seguir adelante, explorando nuevas fronteras tecnológicas y creando soluciones que mejoren la vida de las personas y transformen el mundo que nos rodea. Únete a nosotros en nuestro viaje hacia el futuro, donde juntos podemos construir un mundo más conectado, inteligente y sostenible.</p>
      </div>
    </div>
  )
}

export default about;