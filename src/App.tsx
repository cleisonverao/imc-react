import { useState } from 'react';
import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import { levels, calculateImc, Level } from '../src/helpers/imc';
import leftArrowImage from '../src/assets/leftarrow.png';
import { GridItem } from './components/gridItem';


const App = () => {
  const [heigthField, setHeigthField] = useState(0);
  const [weigthField, setWeigthField] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButon = () => {
    if (heigthField && weigthField) {
      setToShow(calculateImc(heigthField, weigthField));
    } else {
      return alert("Preencha todos os campos!");
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeigthField(0);
    setWeigthField(0);
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt='' width={150} />
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1>Calcule o seu IMC.</h1>
          <p>IMC é a sigla para Índice de Massa Corporal</p>
          <input
            type="number"
            placeholder="Digite seu peso (em kg)"
            value={weigthField > 0 ? weigthField : ''}
            onChange={e => setWeigthField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            type="number"
            placeholder="Digite sua altura (em metros)"
            value={heigthField > 0 ? heigthField : ''}
            onChange={e => setHeigthField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <button disabled={toShow ? true : false} onClick={handleCalculateButon}>Calcular</button>
        </div>
        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
              {levels.map((item) => (
                <GridItem item={item} />
              ))}
            </div>
          }
          {toShow &&
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrowImage} alt='' width={20} />
              </div>
              <GridItem item={toShow} />
            </div>
          }
        </div>
      </div>
    </div>
  )
}
export default App;
