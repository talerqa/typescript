import React from 'react';
import './App.css';
import Rating from "./components/rating/Rating";
import Accordion from "./components/accordion/Accordion";

function App() {
  return (
    <div>
      <PageTitle title={'TITLE PAGE'}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
      <Accordion titleValue={'Menu'} collapsed={true}/>
      <Accordion titleValue={'Users'} collapsed={false}/>
    </div>
  )
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendered');

  return (
    <div>
      <h1>{props.title}</h1>
    </div>)
}

export default App;
