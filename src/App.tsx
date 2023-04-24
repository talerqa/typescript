import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/btn/UncontroledBtn';
import {UncontroleAccordion} from './components/accordion/UncotroleAccordion';
import ContoledRating, {RatingValueType} from './components/rating/ContoledRating';
import UncontrRating from './components/rating/UncontrRating';
import ControledAccordion from './components/accordion/ControledAccordion';
import {ControledOnOff} from './components/btn/ControledBtn';


function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType >(0);

  const [statusValueAccordion, setStatusValueAccordion] = useState<boolean>(false)

  const [statusButton, setStatusButton] = useState<boolean>(false)

  return (
    <div>
      <ControledAccordion titleValue={"MEEENU"} collapsed={statusValueAccordion} setStatusValueAccordion={setStatusValueAccordion}/>

      <UncontroleAccordion titleValue={'Menu'}/>

      <OnOff/>

      <ContoledRating value={ratingValue} onClick={setRatingValue}/>

      <UncontrRating/>

      <ControledOnOff statusButton={statusButton} setStatusButton={setStatusButton}/>
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
