import student from '../assets/student.svg'
import female from '../assets/female.svg'

export default function Team({ setSection }) {
  return (
    <section id="team">
      <button type="button" className="back" onClick={ () => setSection("Index") }>Back</button>
      <div>
        <h1>Equipo 11</h1>
        <p>Estudiantes del Instituto Tecnológico de Cancún</p>
        <div id="members-container">
          <div>
            <h2>Emmanuel Chan Cohuo</h2>
            <img src={student} alt="" />
            <img className="person" src="https://media-public.canva.com/VYFng/MAE-ZuVYFng/1/t.png" alt=""/>
          </div>
          <div>
            <h2>Osmara Guadalupe Luna Falcón</h2>
            <img src={female} alt="" />
            <img className="person" src="https://media-public.canva.com/VYFng/MAE-ZuVYFng/1/t.png" alt=""/>
          </div>
          <div>
            <h2>Viviana Margarita Rodriguez Cervera</h2>
            <img src={female} alt="" />
            <img className="person" src="https://media-public.canva.com/VYFng/MAE-ZuVYFng/1/t.png" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}
