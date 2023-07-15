import React from 'react';
import styles from './App.module.scss'

import Header from 'components/Header/Header';
import FigmaPlugin from 'components/FigmaPlugin/FigmaPlugin';
import FigmaResources from 'components/FigmaResources/FigmaResources';
import Designers from 'components/Designers/Designers';
import Footer from 'components/Footer/Footer';

function App() {

  const nav = ['Recursos', 'Sobre', 'Depoimentos']

  return (
    <div className={ styles.app }>
      <div className={ styles.app__container }>
        <Header 
          nav= { nav }
        />
        <main className={ styles.app__main }>
          <FigmaPlugin />
          <div className={ styles.app__figma }></div> 
          <FigmaResources />
          <Designers />
        </main>  
        <Footer />
      </div>
    </div>
  );
}

export default App;