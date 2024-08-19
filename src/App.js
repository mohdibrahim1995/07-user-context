import './App.css';
import Dashboard from './components/Dashboard'
import Podcasts from './components/Podcasts';
import Recommendations from './components/Recommendations';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserContext } from './context/UserContext';
import Home from './components/Home';
import { useState } from 'react';
function App() {

  const [user,setUser] = useState("Mohd Ibrahim")
  return (
   <>

  <Router>

    <UserContext.Provider value={[user,setUser]}>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/recommedations' element={ <Recommendations/>} > </Route>
      <Route path='/podcasts' element={<Podcasts/>}> </Route>
    </Routes>
    </UserContext.Provider>
  </Router>
  
  
 
   

   </>
  );
}

export default App;
