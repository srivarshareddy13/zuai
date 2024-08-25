import Login from "./components/account/Login"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DataProvider from "./context/DataProvider";
import Home from './components/home/Home';
import Header from './components/header/Header';

function App() {
  return (
    
      <DataProvider>
        <BrowserRouter>
          <Header />
          <div style={{ marginTop: 60 }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>
    
  );
}

export default App;
