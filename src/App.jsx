import React from 'react';
import styles from './App.module.scss'

import Header from 'components/Header/Header';
import FigmaPlugin from 'components/FigmaPlugin/FigmaPlugin';
import FigmaResources from 'components/FigmaResources/FigmaResources';
import Designers from 'components/Designers/Designers';
import Footer from 'components/Footer/Footer';
import LineCard from 'components/LineCard/LineCard';

function App() {
  return (
    <div className={ styles.app }>
      <LineCard />
      <div className={ styles.app__container }>
        <Header />
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