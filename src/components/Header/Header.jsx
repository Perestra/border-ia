import React from 'react'
import styles from './Header.module.scss'

import { ReactComponent as Logo } from 'assets/svg/logo.svg'
import Navigation from 'components/Navigation/Navigation';
import ItemList from 'components/ItemList/ItemList';
import Button from 'components/Button/Button';

const Header = ({ nav }) => {
  return (
    <header className={ styles.header }>
        <div className={ styles.header__logo } >
          <Logo />
          <h1>Border-IA</h1>
        </div>
        <Navigation 
          list={ nav.map( (item, index) =>  
            <ItemList
              key={ index } 
              className={ styles.header__list }
              href=''
              text={ item }
            />
          )}
        />
        <Button 
          className={ styles.header__button }
          type= 'button'
          value='Comunidade'
        />
    </header>
  )
}

export default Header