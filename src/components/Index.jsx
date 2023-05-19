import { useState } from 'react';
import Presentation from './Presentation'
import Calculator from './Calculator'

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
      name: "Test",
      description: "This is the description of the calculator",
      params: [["Description of the first param", "first"], ["Description of the second param", "second"]],
      callback: (params) => {
        const { first, second } = params

        return first * second
      } 
    },
    {
      name: "Test 2",
      description: "Description of the second calculator",
      params: [["Desviacion Estandar", "x"], ["Un parametro x", "y"]],
      callback: ({ x, y }) => x+y * y
    }
  ]

  return (
    <section>
      { calculator >= 0 ? <Calculator handleBack={ handleBack } {...calculators[calculator]} /> : <Presentation calculators={calculators} handleClick={handleClick}/> }
    </section>
  )
}
