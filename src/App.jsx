import React, { useEffect } from 'react';
import Navbar from './components/navbar.jsx'
import Cards from './components/cards/cards.jsx'
import Form from './components/Form/Form.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import {useDispatch} from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { fetchProfile } from './actions/profiles.js'
import Desc from './components/description.jsx';

const App = () =>{
  const dispatch = useDispatch();

useEffect(() => {
  dispatch(fetchProfile());
}, [dispatch]); 
  return (
    <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<>
       <Desc/>
    <Cards /></>} />
    <Route path="/form" element={<Form />} />
    <Route path="/leaderboard" element={<Leaderboard />} />
  </Routes>
</BrowserRouter>

    
  );
}

export default App;
