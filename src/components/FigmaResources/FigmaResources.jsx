import React from 'react'
import styles from './FigmaResources.module.scss'

import Title from 'components/Title/Title'
import Navigation from 'components/Navigation/Navigation'
import ResourceList from 'components/ResourceList/ResourceList'

import { PiSparkle, PiTextT, PiArrowsOutLight, PiUserFocusLight  } from 'react-icons/pi'

const FigmaResources = () => {
  return (
    <section className={ styles.section }>
        <div className={ styles.section__header }>
            <Title 
                text='Recursos'
            />
            <h1>Como o Border-IA te <span className={ styles.section__span }>ajuda no dia a dia</span></h1>
        </div>
        <Navigation 
            list={ 
                <>
                    <ResourceList 
                        key={0}
                        icon={ <PiSparkle className={ styles.section__icon } /> }
                        title='Removedor de fundo' 
                        description='Torne o fundo transparente em qualquer foto.' 
                    />
                    <ResourceList 
                        key={1}
                        icon={ <PiTextT className={ styles.section__icon } /> }
                        title='Gerador de texto' 
                        description='Gere textos de espaço reservado para suas interfaces.' 
                    />
                    <ResourceList 
                        key={2}
                        icon={ <PiArrowsOutLight className={ styles.section__icon } /> }
                        title='Amplificador de imagem' 
                        description='Amplie imagens e melhore sua resolução.' 
                    />
                    <ResourceList 
                        key={3}
                        icon={ <PiUserFocusLight className={ styles.section__icon } /> }
                        title='Gerador de avatar' 
                        description='Crie instantaneamente avatares de usuários.' 
                    />
                </>
            }
        />
    </section>
  )
}

export default FigmaResources