import { useState } from 'react';
import Presentation from './Presentation'
import Calculator from './Calculator'
import factorial from '../utils/factorial'
import ncr from '../utils/ncr'

let indexStart = -1

export default function Index() {
  const [calculator, setCalculator] = useState(indexStart)

  const handleClick = (e) => {
    const { index } = e.target.dataset
    indexStart = index
    setCalculator(index)
  }

  const handleBack = e => {
    setCalculator(-1)
    indexStart = -1
  }

  const calculators = [
    {
      name: "Distribución binomial",
      description: "Esta distribución cuenta el número de éxitos en n ensayos los cuales son independientes entre sí y con una probabilidad fija p de éxito.",
      params: [["Número de éxitos", "x"], ["Número de ensayos", "n"], ["Probabilidad de éxito", "p"]],
      callback: ({x, n, p}) => ((factorial(n)/(factorial(x)*factorial(n-x)))*(Math.pow(p, x)*Math.pow((1-p), n-x))).toFixed(6)
    },
    {
      name: "Distribución hipergeométrica",
      description: "Modela el número de eventos en una muestra de tamaño fijo cuando usted conoce el número total de elementos en la población de la cual proviene la muestra. Cada elemento de la muestra tiene dos resultados posibles (es un evento o un no evento).",
      params: [["Tamaño de la población", "N"], ["Número de casos de éxito", "r"], ["Número de ensayos", "n"], ["Valor que toma la variable", "x"]],
      callback: ({ N, r, n, x }) => ((ncr(r, x)*ncr(N-r,n-x))/ncr(N, n)).toFixed(6)
    },
    {
      name: "Distribución de Poisson",
      description: "Esta distribución calcula a partir de una frecuencia de ocurrencia media, la probabilidad de que ocurra un determinado número de eventos durante cierto período de tiempo.",
      params: [["Número de éxitos", "x"], ["Media", "m"]],
      callback: ({ x, m }) => (((Math.pow(m, x))/factorial(x))*Math.exp(-m)).toFixed(6)
    },
    {
      name: "Distribución normal",
      description: "Sirve para conocer la probabilidad de encontrar un valor de la variable que sea igual o inferior a un cierto valor , conociendo la media, la desviación estándar, y la varianza de un conjunto de datos en sustituyéndolos en la función que describe el modelo.",
      params: [["Media", "m"], ["Desviación estándar", "s"], ["Variable", "x"]],
      callback: ({ m, s, x}) => ((1/(s*Math.sqrt(2*Math.PI)))*Math.exp(-Math.pow(x-m, 2)/(2*s*s))).toFixed(6)
    },
    {
      name: "Distribución normal estándar",
      description: "La distribución normal estándar es una distribución normal de valores estandarizados llamados puntuaciones z. Una puntuación z se mide en unidades de la desviación típica. La media de la distribución normal estándar es cero y la desviación típica es uno.",
      params: [["Media", "m"], ["Desviación estándar", "s"], ["Variable", "x"]],
      callback: ({ m, s, x }) => ((1/Math.sqrt(2*Math.PI))*Math.exp(1)*((x-m)*-1/s)/2).toFixed(6)
    },
    {
      name: "Distribución T-student",
      description: "Es una distribución de probabilidad que surge del problema de estimar la media de una población normalmente distribuida cuando el tamaño de la muestra es pequeño y la desviación estándar poblacional es desconocida. En este caso, nos limitamos a calcular el intervalo de la media poblacional.",
      params: [["Desviación estándar", "s"], ["Media muestral", "x"], ["Tamaño de la muestra", "n"], ["Valor de t área n-1 grados de libertad", "t"],],
      callback: ({ s, x, n, t }) => {
        const left = x - (t*(s/Math.sqrt(n)))
        const right = x + (t*(s/Math.sqrt(n)))

        return `${left.toFixed(4)} - ${right.toFixed(4)}`
      }
    },
  ]

  return (
    <section>
      { calculator >= 0 ? <Calculator handleBack={ handleBack } {...calculators[calculator]} /> : <Presentation calculators={calculators} handleClick={handleClick}/> }
    </section>
  )
}
