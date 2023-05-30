import React, {useState} from 'react';
import './App.css';
import {OnOff} from './components/btn/UncontroledBtn';
import {UncontroleAccordion} from './components/accordion/UncotroleAccordion';
import ContoledRating, {RatingValueType} from './components/rating/ContoledRating';
import UncontroledRating from './components/rating/UncontroledRating';
import ControledAccordion, {ItemsType} from './components/accordion/ControledAccordion';
import {ControledOnOff} from './components/btn/ControledBtn';
import './components/select/Select'


function App() {

  //UseState for Components
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [statusValueAccordion, setStatusValueAccordion] = useState<boolean>(false)
  const [statusButton, setStatusButton] = useState<boolean>(false)
  const arrNums: Array<ItemsType> = [
    {title: 'Dyma', value: '1'},
    {title: 'Dyma', value: '1'},
    {title: 'Dyma', value: '1'},
  ]

  const ControledAccordionWrap = React.memo(ControledAccordion)
  const UncontroleAccordionWrap = React.memo(UncontroleAccordion)
  const ContoledRatingWrap = React.memo(ContoledRating)
  const UncontroledRatingWrap = React.memo(UncontroledRating)
  const OnOffWrap = React.memo(OnOff)
  const ControledOnOffWrap = React.memo(ControledOnOff)

  const onChange = () => setStatusValueAccordion(!statusValueAccordion)

  return (
    <div>
      Accordions:
      =================Controlled======================
      <ControledAccordionWrap
        titleValue={'MEEENU'}
        collapsed={statusValueAccordion}
        onChange={onChange}
        items={arrNums}
      />
      =================UnControlled======================
      <UncontroleAccordionWrap titleValue={'Menu'}/>


      Ratings:
      ==============Controlled======================
      <ContoledRatingWrap value={ratingValue} onClick={setRatingValue}/>
      =================UnControlled======================
      <UncontroledRatingWrap/>

      Buttons:
      =================UnControlled======================
      <OnOffWrap/>
      =================Controlled======================
      <ControledOnOffWrap statusButton={statusButton} setStatusButton={setStatusButton}/>


      const root = ReactDOM.createRoot(
      document.getElementById('root')
      );


    </div>
  )
}

export default App;
