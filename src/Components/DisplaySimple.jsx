import '../styles/DisplaySimple.css'
const DisplaySimple = () => {
  return(
    <>
    <div className="box-display">
      <span> Texto </span>
    </div>
      <a target='blank_' href='https://www.google.com' rel="no_refeerer" id="inline-block-a">Texto con display: inline-block </a>
      <a target='blank_' href='https://www.google.com' rel="no_refeerer" id="block-a">Texto con display: block </a>
    </>
  )
}

export default DisplaySimple