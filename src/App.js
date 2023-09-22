import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Portfolio from './pages/portfolio/Portfolio';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Portfolio/> } />
      </Routes >
    </div>
  );
}

export default App;
