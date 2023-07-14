import React from 'react'
import styles from './Button.module.scss'

const Button = ({ className, type, value }) => {
  return (
    <div className={ className}>
        <button 
            className={ styles.button }
            type={ type }
            value={ value }
        >
            { value }
        </button>
    </div>
  )
}

export default Button