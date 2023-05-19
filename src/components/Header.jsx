function Header({ section, setSection }) {
  return (
    <header>
      <img src="https://media-private.canva.com/z8d-4/MAFjIGz8d-4/1/t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230518%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230518T115444Z&X-Amz-Expires=50769&X-Amz-Signature=c37aa87c011d3490c30c2ca6486de66b7edc00c6231e4a5808bd528c7b762f87&X-Amz-SignedHeaders=host&response-expires=Fri%2C%2019%20May%202023%2002%3A00%3A53%20GMT" alt=""/>
      <nav>
        <ul>
          <li className={ section === "Index" ? "selected" : "" } onClick={ () => setSection("Index") }>Inicio</li>
          <li className={ section === "Team" ? "selected" : "" } onClick={ () => setSection("Team") }>Equipo</li>
        </ul> 
      </nav>
    </header>
  )
}

export default Header
