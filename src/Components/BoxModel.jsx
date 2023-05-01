import '../styles/BoxModel.css'
const BoxModel = () => {
  return (
    <div className='box'>
      <h1>400 px de Width solo para el contenido</h1>
      <div className='small-box'>
        <h1>Ejemplo de Box model: content-box</h1>
        <span>Esto es un texto</span>
      </div>
      <h1>400 px de Width solo para todo el bloque</h1>
      <div className='small-box-2'>
        <h1>Ejemplo de Box model: : border-box</h1>
        <span>Esto es un texto</span>
      </div>
    </div>)
}

export default BoxModel