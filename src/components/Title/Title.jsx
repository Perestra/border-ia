import React from 'react'
import styles from './Title.module.scss'

const Title = ({ text }) => {
  return (
    <div className={ styles.container }>
      <span>{ text }</span>
    </div>
  )
}

export default Title