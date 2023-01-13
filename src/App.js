import './App.css';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Home from './components/Home';
import About from './components/About';
import StepCard from './components/StepCard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Form/>}/>
        
      </Routes>
      <About/>
      <StepCard/>
    </div>
  );
}

export default App;
