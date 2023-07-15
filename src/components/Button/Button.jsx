import React from 'react'
import styles from './Button.module.scss'

const Button = ({ className, type, value, icon }) => {
  return (
    <div className={ className}>
      <button 
        className={ styles.button }
        type={ type }
        value={ value }
      >
        { icon }
        { value }
      </button>
    </div>
  )
}

export default Button