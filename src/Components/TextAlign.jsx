import '../styles/TextAlign.css'
const TextAlign = () => {
  return (
    <>
      <h2> Propiedad TextAlign</h2>
      <div className="text-align-non">
        <span> Texto </span>
      </div>
      <div className="text-align-yes">
        <span> Texto </span>
      </div>

      <a target='blank_' href='https://www.google.com' rel="no_refeerer" className='link-text'>Texto con display: block  y text-align: center</a>
      <a target='blank_' href='https://www.google.com' rel="no_refeerer" className='link-text-not-working'>Texto con un width determinado</a>
    </>
  )
}

export default TextAlign