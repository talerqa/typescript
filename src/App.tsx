import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/btn/UncontroledBtn';
import {UncontroleAccordion} from './components/accordion/UncotroleAccordion';
import ContoledRating, {RatingValueType} from './components/rating/ContoledRating';
import UncontrRating from './components/rating/UncontrRating';
import Accordion from './components/accordion/Accordion';


function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType >(0);

  const [statusValueAccordion, setStatusValueAccordion] = useState<boolean>(false)

  return (
    <div>
      <Accordion titleValue={"MEEENU"} collapsed={statusValueAccordion} setStatusValueAccordion={setStatusValueAccordion}/>

      <UncontroleAccordion titleValue={'Menu'}/>

      <OnOff/>

      <ContoledRating value={ratingValue} onClick={setRatingValue}/>

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
