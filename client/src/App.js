import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/home.js';
import { Auth } from './pages/auth';
import { SaveRecipr } from './pages/save-recipe';
import { CreateRecipe } from './pages/create-recipe';
import { NavBar } from './components/navbar';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/create-recipe' element={<CreateRecipe/>} />
          <Route path='/save-recipe' element={<SaveRecipr/>} />
          <Route path='/auth' element={<Auth/>} />
        </Routes>

      </Router>   
    </div>
  );
}

export default App;
