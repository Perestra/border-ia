import React, { useState } from 'react'
import styles from './Header.module.scss'

import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import AnchorList from 'components/AnchorList/AnchorList';
import Button from 'components/Button/Button';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { HiOutlineXMark } from 'react-icons/hi2'

const Header = () => {

  const nav = ['Recursos', 'Sobre', 'Depoimentos']

  const [menu, setMenu] = useState(false)

  const scrollLock = (menuState) => {
    if(menuState) {
      window.document.body.classList.add('scroll-lock')
    } else {
      window.document.body.classList.remove('scroll-lock')
    }
  }

  const toggleMenu = () => {
    setMenu(!menu)
    window.scrollTo(0,0)
  }

  scrollLock(menu)

  return (
    <header className={ styles.header }>
      <div className={ styles.header__logo } >
        <Logo />
        <h1>Border-IA</h1>
      </div>
      <nav className={ `${styles.header__nav} ${styles[menu? "open" : ""]}` }>
        <ul className={ styles.header__ul }>
          { nav.map( (item, index) =>  
            <AnchorList
              key={ index } 
              className={ styles.header__list }
              target="_self"
              href='#'
              text={ item }
            />
          )}
        </ul>
      </nav>
      <div className={ styles.header__mobile }>
        <Button 
          className={ styles.header__button }
          type= 'button'
          value='Comunidade'
        />
        <Button 
          className={ styles.header__menu }
          onClick={ toggleMenu }
          icon={!menu? <HiOutlineMenuAlt3 className={ styles.header__navIcon } /> : <HiOutlineXMark className={ styles.header__navIcon } />}
          type='button'
          value=''
        />
      </div>
    </header>
  )
}

export default Header