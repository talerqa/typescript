import React from 'react';
import './App.css';
import {Accordion} from "./components/accordion/Accordion";
import Rating from "./components/rating/Rating";

function App() {
  console.log('App rendered')
  return (
    <div>
      <PageTitle title={'This is my APP'}/>
      <PageTitle title={'This is no APP'}/>
      <PageTitle title={'This is IT-Incubator'}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Accordion/>
    </div>
  )
}

function PageTitle(props: any) {
  console.log('PageTitle rendered');
  return <h1> {props.title} </h1>
}


export default App;
