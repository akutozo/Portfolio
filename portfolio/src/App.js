import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'projects',
      description: 'Examples of past and current projects',
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
        </div>
      </main>
    </div>
  );
}

export default App;