import React, { useState, useCallback,useRef } from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import Profile from './components/profile'
import BackgroundChanger from './components/backGroundChanger'
import './index.css';
import { Button,ButtonGroup } from '@mui/material';
import ParaGenerator from './components/paraGenerator';
function App() {
    
    return (
      <div>
        <BrowserRouter>
        <AppNavbar/>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/backgroundChanger" element={<BackgroundChanger/>} />
            <Route path="/paraGenerator" element={<ParaGenerator/>} />
          </Routes>
        </BrowserRouter>
      </div>
        
    );
}
function AppNavbar(){
  const navigate = useNavigate();
  return <div>
    <div >
          Hi This is the top bar and you can find it fixed no matter which page you go to
          <ButtonGroup style = {{margin : '10px'}}variant="contained" aria-label="Basic button group">
            <Button onClick = {()=>{
            navigate('/');
          }}>DashBoard</Button>
          <Button onClick = {()=>{
            navigate('/backgroundChanger');
          }} >Background Changer</Button>
          <Button onClick = {()=>{
            navigate('/paraGenerator');
          }} >Paragraph Generator</Button>
          </ButtonGroup>
          
        </div>
    </div>
}
export default App
