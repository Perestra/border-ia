import React from 'react'
import styles from './ResourceList.module.scss'

const ResourceList = ({ icon, title, description }) => {
  return (
    <li className={ styles.list }>
      <div className={ styles.list__icon }>{ icon }</div>
      <div className={ styles.list__title }><h1>{ title }</h1></div>
      <div className={ styles.list__description }><p>{ description }</p></div>
    </li>
  )
}

export default ResourceList