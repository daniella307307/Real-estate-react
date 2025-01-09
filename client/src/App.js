import './App.css';
import Grid from './components/Grid/Grid';
import Home from './components/Home/Home';
import LoginScreen from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/grid' element={<Grid/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
