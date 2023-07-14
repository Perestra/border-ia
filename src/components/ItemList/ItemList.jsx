import React from 'react'
import styles from './ItemList.module.scss'

const ItemList = ({ className, href, text }) => {
  return (
    <li className={ styles.list }>
        <a 
            className={ className }
            href={ href }>{ text }
        </a>
    </li>
  )
}

export default ItemList