import React from 'react'
import { Route, Routes } from "react-router-dom";

//find a better way for this \/\/\/
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import SkillsPage from './pages/SkillsPage';
import ExperiencesPage from './pages/ExperiencesPage';
import WorkInProgressPage from './pages/WorkInProgressPage';

const Main = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<WorkInProgressPage/>} />
            <Route path='/skill' element={<WorkInProgressPage/>} />
            <Route path='/experience' element={<WorkInProgressPage/>} />
            <Route path='/education' element={<WorkInProgressPage/>} />
            <Route path='/portfolio' element={<WorkInProgressPage/>} />
            <Route path='/contact' element={<WorkInProgressPage/>} />
        </Routes>
    </>
  )
}

export default Main