import React from 'react'
import styles from './AnchorList.module.scss'

const AnchorList = ({ className, href, text }) => {
  return (
    <li className={ styles.list }>
      <a 
        className={ className }
        href={ href }>{ text }
      </a>
    </li>
  )
}

export default AnchorList