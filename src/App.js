import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from "./layout/Header";
import Test from './test/Test';

const App = ()=> {
  return (
    <Routes>
      <Route element={<Header/>}>
        <Route path="/" element={<Test/>} />
        <Route path="/map" element={<Test/>} />
        <Route path="/record" element={<Test/>} />
        <Route path="/mypage" element={<Test/>} />
        <Route path="/login" element={<Test/>} />
        <Route path="/join" element={<Test/>} />

      </Route>


    </Routes>
  );
}

export default App;
