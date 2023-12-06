import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { Home } from './Home/Home';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' Component={Home}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
