import { BrowserRouter,
  Routes, 
  Route,
} from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';

// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotels/:id' element={<List/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
