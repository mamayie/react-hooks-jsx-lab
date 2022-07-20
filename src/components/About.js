import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">About
  <h2>About Me</h2>
  <p>I am a React Developer.</p>
  <image src={image} alt= "I made This." />
  </div>;
}

export default About;
