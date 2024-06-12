import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import { Apartment } from './pages/Apartment';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';




const PrivateRoute = ({children }) => {
    const isAuthenticated = localStorage.getItem("token") ?? ""
    return isAuthenticated ? children : <Navigate to="/login" />;
  };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <App />} />
                <Route path="/login" element={<Login />} />
                <Route path='/Apartment/:id' element={<Apartment />} />

                <Route path='/user/dashboard' element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
                } 
                />
                <Route path='*' element={<h1>404 page not found</h1>} />
            </Routes>
        </BrowserRouter>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

