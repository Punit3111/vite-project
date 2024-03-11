//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

import LoginForm from './LoginForm';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './comman.css'
import Contact from './pages/Contact';
import About from './pages/About';
import { Provider } from 'react-redux';
import store from './reduxStore/Store';
import NotFound from './Notfound';
import DefaultLayout from './Defaultlayout';
//import NavBar from './NavBar';

const App = ()=> {
   
  return (
  <>
  <Provider store={store}>
     <Router>

       <div className="container ">
       
        <Routes>
         <Route path="/" element={<LoginForm />} />
         <Route path="/login" element={<LoginForm/>} />
          <Route
              path="/contact"
              element={<DefaultLayout><Contact /></DefaultLayout>}
            />

          <Route
              path="/about"
              element={<DefaultLayout><About /></DefaultLayout>}
            />

             {/* 404 Route */}
          <Route path="*" element={<NotFound />} />

        </Routes>
       </div> 
     </Router> 
  </Provider>

  </>

  );
};

export default App;
