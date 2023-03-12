import React from "react";

export function Accordion(props: any) {
  console.log('Accordion rendered')
  return (
    <div>
      <AccordionTitle title={'Menu'}/>
      <AccordionTitle title={'Title'}/>
      <AccordionBody/>
    </div>
  )
}

function AccordionTitle(props: any) {
  console.log('AccordionTitle rendered')
  return <h3> {props.title} </h3>
}

function AccordionBody() {
  console.log('AccordionBody rendered')
  return (<div>
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>)
}