import logo from './logo.svg';
import './App.css';
import HomeComponent from './ShayriComponents/HomeComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayShayri from './ShayriComponents/DisplayShayri';
import Demo from './ShayriComponents/Demo';
// import { Switch } from '@mui/material';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/shayri' element={<DisplayShayri />} />
      </Routes>
    </Router>
  );
}

export default App;
