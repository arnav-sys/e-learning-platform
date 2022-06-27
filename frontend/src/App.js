import React from 'react';
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RegisterPage from './screens/RegisterPage';
import Signin from './screens/Signin';
import Main from './screens/Main';
import MyCourse from './screens/MyCourse';
import TeacherCourse from './screens/TeacherCourse';
import Profile from './screens/Profile';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/signin" element={<Signin/>}/>
            <Route path="/main" element={<Main/>}/>
            <Route path="/mycourses" element={<MyCourse/>}/>
            <Route path="/teachercourses" element={<TeacherCourse/>}/>
            <Route path="/Profile" element={<Profile/>}/>
        </Routes>
    </Router>
  );
}

export default App;
