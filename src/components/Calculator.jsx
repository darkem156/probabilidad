import { useState, useEffect } from 'react'

export default function Calculator({ name, description, callback, params, handleBack }) {
  const [paramsObject, setParamsObject] = useState({})
  const [result, setResult] = useState(undefined)

  const handleChange = (e) => {
    setParamsObject({...paramsObject, [e.target.dataset.param]: Number(e.target.value)})
  }

  const handleCalc = (e) => {
    const result = callback(paramsObject)
    setResult(result)
  }

  useEffect(() => {
    if(result || result === 0) handleCalc();
  }, [paramsObject])

  return (
    <section className="calculator-container">
      <button type="button" className="back" onClick={ handleBack }>Back</button>
      <div>
        <h1>{ name }</h1>
        <p className="description">{ description }</p>

        <div className="params-container">
          {
            params.map(([description, param], index) => <div key={ index }>
              <p>{description}</p>
              <input type="number" placeholder={param} data-param={ param } name={param} onChange={ handleChange } />
            </div>)
          }
        </div>

        <button type="" onClick={ handleCalc }>Calcular</button>

        { result || result === 0
            ? <p>Resultado: {result}</p>
            : <></>
        }
      </div>
    </section>
  )
}
