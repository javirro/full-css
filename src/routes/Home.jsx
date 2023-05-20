import { Link } from "react-router-dom"
import '../styles/Home.css'
const Home = () => {
  return (
    <div className="container">
      <Link to="/basico" className="home-link">Basico</Link>
      <Link to="/basico2" className="home-link">Basico2</Link>
      <Link to="/position" className="home-link">Position</Link>
      <Link to="/text" className="home-link">Text</Link>
      <Link to="/responsive" className="home-link">Responsive</Link>
    </div>)
}

export default Home
