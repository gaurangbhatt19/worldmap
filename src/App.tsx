import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import India from './pages/India';


function App() {

  return (
    <div className="App">
      <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/india" element={<India/>}/>
      </Routes>
      </>
    </div>
  );
};
  
export default App;
