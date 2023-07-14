import React from 'react'
import styles from './ItemList.module.scss'

const ItemList = ({ href, text }) => {
  return (
    <li className={ styles.list }>
        <a 
            className={ styles.list__anchor }
            href={ href }>{ text }
        </a>
    </li>
  )
}

export default ItemList