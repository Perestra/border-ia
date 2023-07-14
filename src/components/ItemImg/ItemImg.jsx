import React from 'react'
import styles from './ItemImg.module.scss'

const ItemImg = () => {
  return (
    <div className={ styles.container }>
        <img 
            className={ styles.container__image } 
            src="" 
            alt="" 
        />
    </div>
  )
}

export default ItemImg