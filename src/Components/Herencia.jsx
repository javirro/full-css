import '../styles/Herencia.css'

const Herencia = () => {
  return (
    <main>
      <p>
        Esto es un texto de prueba
        <a className='link' target='blank_' href='https://www.google.com' rel="no_refeerer"> link to  Google</a>
      </p>

      <h3>Lista por defecto con color darkRed </h3>
      <ul className='list'>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
        <li className='list-item-extra'>Item 4</li>
      </ul>
    </main>)
}

export default Herencia