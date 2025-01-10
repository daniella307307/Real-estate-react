import './App.css';
import Grid from './components/Grid/Grid';
import Home from './components/Home/Home';
import LoginScreen from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

const PrivateRoute = ({ element }) => {
  const authToken = localStorage.getItem('authToken');
  return authToken ? element : <Navigate to="/login" />;
};
function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute element={<Home/>}/>}/>
          <Route path='/grid' element={<PrivateRoute element={<Grid/>}/>}/>
          <Route path='/profile/:id' element={<PrivateRoute element={<Profile/>}/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/signup' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
