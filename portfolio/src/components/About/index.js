import React from 'react';
import coverImage from "../../assets/cover/about-me-photo.jpg";


function About() {
  return (
    <section className="my-5">
  <h1 id="about">About Jacob Daughtry</h1>
  <p>My programming roots begin with MYSQL and PHP, when I ran small game 
    called Legend of the Green Dragon. The game was a niche freeware application 
    and a fun sandbox for a novice developer in the late 2000s and early 2010s. 
    Working tech support at Verizon Wireless, I eventually transitioned to healthcare and 
    quickly moved into an Operations Analyst position. Over the years I've had the pleasure 
    of working with amazing developers who inspired me to pursue a one time hobby and build a career.</p>

    <p>I firmly believe that all problems have solutions and my hope this portfolio provides a small window into my mind, an example of my work and reveals a passionate, capable candidate worth investing in.</p>
  <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
</section>
  );
}

export default About;