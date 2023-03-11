import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import Page1 from './components/Page1';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main' element={<Main />} />
        <Route path='/page' element={<Page1 />} />
      </Routes>
      
    </div>
  );
}

export default App;
