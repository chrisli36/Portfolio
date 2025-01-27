import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import Test from './components/Test';
// import { useEffect, useState } from 'react';

export default function App() {
  // const [country, setCountry] = useState("");
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch('https://restcountries.com/v3.1/all');
  //     const data = await response.json();
  //     setCountry(data[0]['name']['official']);
  //   }
  //   fetchData();
  // })

  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <h1>{country}</h1> */}
      <Navbar />
      <About />
      <Projects />
      <Contact />
      {/* <Test /> */}
    </main>
  );
};