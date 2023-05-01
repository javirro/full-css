import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Basico from './routes/Basico'
import Basico2 from './routes/Basico2'
import Home from './routes/Home'

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basico" element={<Basico />} />
          <Route path="/basico2" element={<Basico2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;