import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Wrapper from './components/Wrapper';
import TestContent from './components/TestContent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/wrap' element={<Wrapper />} />
        <Route path='/testcontent' element={<TestContent />} />
      </Routes>
    </>
  );
}

export default App;
