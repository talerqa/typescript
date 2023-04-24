import React from 'react';

export type RatingValueType =  0 | 1 | 2 | 3 | 4 | 5;
type ContoledRatingType = {
  value: RatingValueType
  onClick: (value: RatingValueType) => void
}

function ContoledRating(props: ContoledRatingType) {

  return (<div>
    <Star selected={props.value > 0} value={1} onClick={props.onClick}/>
    <Star selected={props.value > 1} value={2} onClick={props.onClick}/>
    <Star selected={props.value > 2} value={3} onClick={props.onClick}/>
    <Star selected={props.value > 3} value={4} onClick={props.onClick}/>
    <Star selected={props.value > 4} value={5} onClick={props.onClick}/>
  </div>)
}

type StarPropsType = {
  selected: boolean
  value:  RatingValueType
  onClick: (value: RatingValueType) => void
}

function Star(props: StarPropsType) {
 return  <button onClick={() => props.onClick(props.value)}>
   {props.selected ? <b>Star </b> : 'Star '}
 </button>


}

export default ContoledRating
