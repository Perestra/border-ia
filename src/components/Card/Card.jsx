import React from 'react'
import styles from './Card.module.scss'

import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import { ReactComponent as Loading } from 'assets/svg/loading.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { PiSparkle } from 'react-icons/pi'

import Button from 'components/Button/Button'
import ItemImg from 'components/ItemImg/ItemImg'
import cardBlur from 'assets/png/card-blur.png'

const Card = () => {
  return (
    <div className={ styles.card }>
        <ItemImg 
            className={styles.card__blur}
            src={cardBlur}
            alt='Fundo com cor grandiente do rosa para o roxo ofuscado'
        />
        <div className={ styles.card__container }>
            <header className={ styles.card__header }>
                <Logo />
                <RxHamburgerMenu className={ styles.card__menuIcon }/>
            </header>
            <main className={ styles.card__main }>
                <section className={ styles.card__section }>
                    <h1>Magic copy</h1>
                    <article className={ styles.card__article }>
                        <p>Crie exemplos de headline para meu produto</p>
                    </article>
                    <div className={ styles.card__loading }>
                        <Loading />
                        <p>Generating...</p>
                    </div>
                    <Button 
                        className={ styles.card__button}
                        icon={ <PiSparkle className={ styles.card__btnIcon }/> }
                        type='button'
                        value='Start now'
                    />
                </section>
            </main>    
        </div>
    </div>
  )
}

export default Card