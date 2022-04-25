import './App.css';
import {Home} from './Component/Home';
import {Department} from './Component/Department';
import {Projects} from './Component/Projects';
import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';

export function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          React TSX Frontend
        </h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
              </li>
              <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/department">
                Department
              </NavLink>
              </li>
              <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/projects">
                Projects
              </NavLink>
              </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/department' element={<Department/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
