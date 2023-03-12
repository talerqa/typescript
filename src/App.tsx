import React from 'react';
import './App.css';

//import Star from "./Star";

function App() {
  console.log('App rendered')
  return (
    <div>
      <Rating/>
      <Accordion/>
    </div>
  )
}

function Rating() {
  console.log('Rating rendered')
  return (
    <div>
      <RatingTitle/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

function RatingTitle() {
  console.log('RatingTitle rendered');
  return <>Rating:</>
}

function Star() {
  console.log('Star rendered')
  return (
    <div>Star</div>
  )
}

function Accordion() {
  console.log('Accordion rendered')
  return (
    <div>
      <AccordionTitle/>
      <AccordionBody/>
    </div>
  )
}

function AccordionTitle() {
  console.log('AccordionTitle rendered')
  return <h3>Menu</h3>
}

function AccordionBody() {
  console.log('AccordionBody rendered')
  return (<div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>)
}

export default App;
