import React from 'react';

type RatingPropsType = {
  value: number,
}


function Rating(props: RatingPropsType) {

  return (<div>
    <Star selected={props.value > 0}/>
    <Star selected={props.value > 1}/>
    <Star selected={props.value > 2}/>
    <Star selected={props.value > 3}/>
    <Star selected={(props.value > 4)}/>
  </div>)
}
type StarPropsType = {
  selected: boolean,
}

function Star(props: StarPropsType) {
  console.log('Star rendered')
  if (props.selected === true) {
    return (
      <span><b>Star </b></span>
    )
  } else {
    return (
      <span>Star </span>
    )
  }
}

export default Rating
