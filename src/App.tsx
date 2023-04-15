import React from 'react';
import './App.css';
import {OnOff} from './components/btn/Btn';
import {UncontroleAccordion} from './components/accordion/UncotroleAccordion';
import RatingBtn from './components/rating/RatingBtn';

function App() {
  return (
    <div>
      {/*<PageTitle title={'TITLE PAGE'}/>*/}
      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      <RatingBtn/>
      {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
      {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
      {/*<Btn/>*/}
      < UncontroleAccordion titleValue={'Menu'}/>
      <OnOff/>
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
