import FigmaPlugin from 'components/FigmaPlugin/FigmaPlugin';
import styles from './App.module.scss'
import Header from 'components/Header/Header';

function App() {

  const nav = ['Recursos', 'Sobre', 'Depoimentos']

  return (
    <div className={ styles.app }>
      <Header 
        nav= { nav }
      />
      <main>
        <FigmaPlugin />
      </main>
    </div>
  );
}

export default App;
