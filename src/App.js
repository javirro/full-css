import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Basico from './routes/Basico'
import Basico2 from './routes/Basico2'
import Home from './routes/Home'
import PositionInfo from './routes/PositionInfo';
import Text from './routes/Text';
import Responsive from './routes/Responsive';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basico" element={<Basico />} />
          <Route path="/basico2" element={<Basico2 />} />
          <Route path="/position" element={<PositionInfo />} />
          <Route path="/text" element={<Text />} />
          <Route path="/responsive" element={<Responsive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;