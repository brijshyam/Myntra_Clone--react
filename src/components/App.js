import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import '../styles/MyApp.css';
import { BoxIconElement } from 'boxicons';
// import PageToRender from './PageToRender'; // this was added later to render according to test cases 
import Homepage from './Homepage';
import LandingPage from './LandingPage';
import PaymentPage from './PaymentPage';
import MyOrders from './MyOrders';
const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/shirt" element={<Homepage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;


/* 
  CICD pipeline
*/



