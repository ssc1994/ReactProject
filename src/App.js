import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./layout/Header";
import Test from './test/Test';

const App = ()=> {
  return (
    <Routes>
      <Route element={<Header/>}>
        <Route path='/' element={<Test/>} />

      </Route>


    </Routes>
  );
}

export default App;
