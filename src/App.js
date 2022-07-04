import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login';
import Shop from './routes/Shop/Shop';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Nav />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
  );
}

export default App;
