import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/btn/UncontroledBtn';
import {UncontroleAccordion} from './components/accordion/UncotroleAccordion';
import ContoledRating, {RatingValueType} from './components/rating/ContoledRating';
import UncontroledRating from './components/rating/UncontroledRating';
import ControledAccordion from './components/accordion/ControledAccordion';
import {ControledOnOff} from './components/btn/ControledBtn';
import exp from 'constants';


function App() {

  //UseState for Components
  const [ratingValue, setRatingValue] = useState<RatingValueType >(0);
  const [statusValueAccordion, setStatusValueAccordion] = useState<boolean>(true)
  const [statusButton, setStatusButton] = useState<boolean>(false)
  const arrNums: Array<string> = ['1', '2', '3', '4', '5']

 const onChange = () => setStatusValueAccordion(!statusValueAccordion)

  return (
    <div>
      Accordions:
     =================Controlled======================
      <ControledAccordion
        titleValue={'MEEENU'}
        collapsed={statusValueAccordion}
        onChange={onChange}
        items={arrNums}
      />
      =================UnControlled======================
      <UncontroleAccordion titleValue={'Menu'}/>


      Ratings:
      ==============Controlled======================
      <ContoledRating value={ratingValue} onClick={setRatingValue}/>
      =================UnControlled======================
      <UncontroledRating/>

      Buttons:
      =================Controlled======================
      <OnOff/>
      =================UnControlled======================
      <ControledOnOff statusButton={statusButton} setStatusButton={setStatusButton}/>
    </div>
  )
}

export default App;
