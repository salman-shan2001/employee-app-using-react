import logo from './logo.svg';
import './App.css';
import AddEmp from './components/AddEmp';
import SearchEmp from './components/SearchEmp';
import Delete from './components/Delete';
import Empviewall from './components/Empviewall';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {


  
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<AddEmp/>}/>
      <Route path='/SearchEmp' element={<SearchEmp/>}/>
      <Route path='/Delete' element={<Delete/>}/>
      <Route path='/Empviewall' element={<Empviewall/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
