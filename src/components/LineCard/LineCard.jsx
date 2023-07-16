import React from 'react'
import styles from './LineCard.module.scss'

import ItemImg from 'components/ItemImg/ItemImg'
import lineBlur from 'assets/png/line-blur.png'
import dotGrid from 'assets/png/dot-grid.png'
import { ReactComponent as Line } from 'assets/svg/line.svg'
import Card from 'components/Card/Card'

const LineCard = () => {
  return (
    <aside>
        <div className={ styles.effect }>
            <ItemImg className={ styles.effect__blur } src={ lineBlur } alt='Linear gradiente vertical do roxo ao rosa embaçado' />  
            <ItemImg className={ styles.effect__dot } src={ dotGrid } alt='Pontos cinza claro espalhados' />  
            <Line className={ styles.effect__line }/>
        </div>    
        <Card />
    </aside>
    
  )
}

export default LineCard