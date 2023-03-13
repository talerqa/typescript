import React from "react";

type RatingPropsType = {
  value: number,
}

function Rating(props: RatingPropsType) {
  console.log('Rating rendered');
  if (props.value === 1) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>)
  }
  else if (props.value === 2) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>)
  }
  else if (props.value === 3) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
        <Star selected={false}/>
      </div>)
  }
  else if (props.value === 4) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={false}/>
      </div>)
  }
  else if (props.value === 5) {
    return (
      <div>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
        <Star selected={true}/>
      </div>)
  }
  return (<div>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
      <Star selected={false}/>
    </div>);
}

type StarPropsType = {
  selected: boolean,
}

function Star(props: StarPropsType) {
  console.log('Star rendered');
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


