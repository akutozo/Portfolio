import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'About Me',
      description: ' ',
    },
    {
      name: 'projects',
      description: 'Examples of past and current projects',
    },
    {
      name: 'resume',
      description: 'Please feel free to look over my history of work.',
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
        {!contactSelected ? (
  <>
    <Gallery currentCategory={currentCategory}></Gallery>
    <About></About>
  </>
) : (
    <ContactForm></ContactForm>
  )}
  <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;