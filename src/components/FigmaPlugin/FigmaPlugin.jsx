import React from 'react'
import styles from './FigmaPlugin.module.scss'

import Title from 'components/Title/Title'
import Button from 'components/Button/Button'
import { FaFigma } from 'react-icons/fa'

const FigmaPlugin = () => {
  return (
    <section className={ styles.section }>
        <Title text='Figma Plugin' />
        <h1>Acelere sua criação <span className={ styles.section__span }>de interfaces</span></h1>
        <div className={ styles.section__knowMore } >
            <h3>Com o Border-IA, você poderá dar vida às suas ideias em tempo recorde.</h3>
            <Button 
                className={ styles.section__button }
                type='button'
                icon={ <FaFigma className={ styles.section__icon } /> }
                value='Usar no Figma'
            />
        </div>
    </section>
  )
}

export default FigmaPlugin