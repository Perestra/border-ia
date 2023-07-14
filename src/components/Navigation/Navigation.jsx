import React from 'react'
import styles from './Navigation.module.scss'

const Navigation = ({ list }) => {
  return (
    <nav className={ styles.nav }>
        <ul className={ styles.nav__ul }>
            {list}
        </ul>
    </nav>
  )
}

export default Navigation