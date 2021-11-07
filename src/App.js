import React, {useState } from 'react';

import './App.css';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  const [pages] = useState([
    { name: 'About', component: <About/>},
    { name: 'Portfolio', component: <Portfolio/>},
    { name: 'Contact', component: <Contact/>},
    { name: 'Resume', component: <Resume/>}
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);



  return (
    <main>
      <Header
      pages = {pages}
      setCurrentPage = {setCurrentPage}
      ></Header>
      {currentPage.component}
      <Footer></Footer>
    </main>
  );
}

export default App;