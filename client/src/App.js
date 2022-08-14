import { BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Register from './pages/register/Register';
import Login from './pages/login/Login';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotels/:id' element={<List/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />  
      </Routes>
    </BrowserRouter>

  );
}

export default App;
