import React from 'react';
import './App.css';
import {OnOff} from './components/btn/Btn';
import {UncontroleAccordion} from './components/accordion/UncotroleAccordion';
import ContoledRating from './components/rating/ContoledRating';
import UncontrRating from './components/rating/UncontrRating';
import Accordion from './components/accordion/Accordion';


function App() {
  return (
    <div>
      {/*<PageTitle title={'TITLE PAGE'}/>*/}
      {/*<UncontrRating value={0}/>*/}
      {/*<UncontrRating value={1}/>*/}
      {/*<UncontrRating value={2}/>*/}
      {/*<UncontrRating value={3}/>*/}
      {/*<UncontrRating value={4}/>*/}
      {/*<UncontrRating value={5}/>*/}
      {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
      {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
      {/*<Btn/>*/}

      <UncontroleAccordion titleValue={'Menu'}/>

      <OnOff/>

      <ContoledRating/>


      <UncontrRating/>
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
