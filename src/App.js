import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Screens/Home';
import About from './Screens/About';
import Venue from './Screens/Venue';
// import Gallery from './Screens/Gallery';
import Speaker from './Screens/Speaker';
import Schedule from './Screens/Schedule';
import Registration from './Screens/Registration';
import CallForPaper from './Screens/CallForPaper';
import Committee from './Screens/Committee';
import Contact from './Screens/Contact';
import Submit from './Screens/Submit';

const App = () => {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/venue' element={<Venue />} />
          {/* <Route path='/gallery' element={<Gallery />} /> */}
          <Route path='/speaker' element={<Speaker />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/registration' element={<Registration />} />
          <Route path='/callForPaper' element={<CallForPaper />} />
          <Route path='/comitee' element={<Committee />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/submit' element={<Submit />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
