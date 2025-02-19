import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './comps/home';
import MoreInfo from './comps/moreInfo';
import AppTodo from './comps/TODOCOMPS/appTodo';

function App() {
  return (
    <Router>
      <div className='App'>
        <Link id='link_id' to="/VOD" className="me-2">VOD</Link>
        <Link id='link_id' to="/TODO" className="me-2">TODO</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/VOD" element={<Home />} />
        <Route path="/TODO" element={<AppTodo />} />
        <Route path="/info/:id" element={<MoreInfo />} />
        <Route path='/*' element={
          <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <h2 className="text-danger">Page 404 - not found!</h2>
          </div>

        }></Route>
      </Routes>

    </Router>
  );
}

export default App;

