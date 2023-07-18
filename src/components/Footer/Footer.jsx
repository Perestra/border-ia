import React from 'react'
import styles from './Footer.module.scss'

import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import Navigation from 'components/Navigation/Navigation'
import { FaInstagram, FaLinkedinIn, FaDribbble, FaGithub } from 'react-icons/fa'
import AnchorList from 'components/AnchorList/AnchorList'

const Footer = () => {
  return (
    <footer className={ styles.footer }>
        <div className={ styles.footer__logo }>
          <Logo />
          <h1>Border-IA</h1>
        </div>  
        <div className={ styles.footer__producers }>
            <p>Designed by</p>
            <h3>Gabriel Abner Dantas</h3>   
            <Navigation 
                flex='flexStart'
                list={<>
                    <AnchorList className={ styles.footer__list } target="_blank" text={ <FaInstagram className={ styles.footer__icon } /> } href='https://www.instagram.com/abnner_dantas/' />
                    <AnchorList className={ styles.footer__list } target="_blank" text={ <FaLinkedinIn className={ styles.footer__icon } /> } href='https://www.linkedin.com/in/gabriel-abner-dantas-a428a9139/' />
                    <AnchorList className={ styles.footer__list } target="_blank" text={ <FaDribbble className={ styles.footer__icon } /> } href='https://dribbble.com/Abnner' />
                </>}
            />
        </div>
        <div className={ styles.footer__producers }>
            <p>Developed by</p>  
            <h3>Danilo Perestrelo Silva</h3> 
            <Navigation 
                flex='flexStart'
                list={<>
                    <AnchorList className={ styles.footer__list } target="_blank" text={ <FaInstagram className={ styles.footer__icon } /> } href='https://www.instagram.com/daniilo.ps/' />
                    <AnchorList className={ styles.footer__list } target="_blank" text={ <FaLinkedinIn className={ styles.footer__icon } /> } href='https://www.linkedin.com/in/danilo-perestrelo-silva-13814968/' />
                    <AnchorList className={ styles.footer__list } target="_blank" text={ <FaGithub className={ styles.footer__icon } /> } href='https://github.com/Perestra?tab=repositories' />
                </>}
            />
        </div>
    </footer>
  )
}

export default Footer