import React from 'react'
import styles from './Navigation.module.scss'

const Navigation = ({ list, flex }) => {
  return (
    <nav className={ styles.nav }>
        <ul className={ `${styles.nav__ul} ${styles[flex]}` }>
          {list}
        </ul>
    </nav>
  )
}

export default Navigation