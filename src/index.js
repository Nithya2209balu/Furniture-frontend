import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import router from './routers/router.js'
import AuthProvider from './contects/AuthProvider.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
   
 <AuthProvider>
    <RouterProvider router={router} />
 </AuthProvider>
   

);
