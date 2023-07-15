import React from 'react'
import styles from './Designers.module.scss'

import ItemImg from 'components/ItemImg/ItemImg'
import Button from 'components/Button/Button'

import designers from 'assets/png/designers.png'
import { FaFigma } from 'react-icons/fa'

const Designers = () => {
  return (
    <section className={ styles.section }>
        <div className={ styles.section__dotGrid_right }></div>
        <div className={ styles.section__dotGrid_left }></div>
        <div className={ styles.section__designers }>
            <ItemImg 
                className={ styles.section__image }
                src={designers}
                alt='Foto do rosto de 4 designers em um formato redondo, um ao lado do outro'
            />
            <h2>Mais de 5.000 designers já estão utilizando</h2>
        </div>
        <div className={ styles.section__title }><h1>Concentre-se no design, não na rotina</h1></div>
        <Button 
            className={ styles.section__button }
            icon={ <FaFigma className={ styles.section__icon } /> }
            type='button'
            value='Usar no figma'
        />
    </section>
  )
}

export default Designers