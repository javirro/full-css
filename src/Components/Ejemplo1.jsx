import '../styles/Ejemplo1.css'
import '../styles/Especificidad.css'
const Ejemplo1 = () => {
  return (
    <main>
      <h1 className='text'>SELECTOR  1 HERMANO SIGUIENTE</h1>
      <div>
        <h2 className='title-1'>Hello</h2>
        <h3 className='text'>Only this</h3>
        <h3 className='text'>Hello</h3>
      </div>
      <h1 className='text'>SELECTOR TODOS HERMANOS SIGUIENTE</h1>
      <div>
        <h2 className='title-2'>Hello</h2>
        <h3 className='text'>Hello</h3>
        <h3>Hello</h3>
        <h3 className='text'>Hello</h3>
        <h3 className='text'>Hello</h3>
      </div>

      <div>
        <h1 id="title" className='title'>Title with class and ID</h1>
      </div>
    </main>)
}

export default Ejemplo1