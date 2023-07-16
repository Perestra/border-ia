import React from 'react'
import styles from './Header.module.scss'

import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import AnchorList from 'components/AnchorList/AnchorList';
import Button from 'components/Button/Button';
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

const Header = () => {

  const nav = ['Recursos', 'Sobre', 'Depoimentos']

  return (
    <header className={ styles.header }>
      <div className={ styles.header__logo } >
        <Logo />
        <h1>Border-IA</h1>
      </div>
      <nav className={ styles.header__nav }>
        <ul className={ styles.header__ul }>
          { nav.map( (item, index) =>  
            <AnchorList
              key={ index } 
              className={ styles.header__list }
              href=''
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
        <HiOutlineMenuAlt3 className={ styles.header__navIcon } />  
      </div>
    </header>
  )
}

export default Header