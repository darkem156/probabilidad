export default function Presentation({ handleClick, calculators }) {
  console.log(calculators)
  return (
    <>
      <section>
        <h2>Probabilidad y Estadística</h2>
        <h1>Calculadora de Distribución</h1>
        <div>
          <nav>
            <ul>
              { calculators.map(({ name, component }, index) => <li data-index={index} key={index} onClick={handleClick}>{name}</li>) }
            </ul>
          </nav>
        </div>
      </section>
      <div className="background">
      </div>
    </>
  )
}
