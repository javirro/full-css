import { Link } from "react-router-dom"
import '../styles/Home.css'
const Home = () => {
  return (
    <div className="container">
      <Link to="/basico" className="home-link">Basico</Link>
      <Link to="/basico2" className="home-link">Basico2</Link>
      <Link to="/position" className="home-link">Position</Link>
    </div>)
}

export default Home
