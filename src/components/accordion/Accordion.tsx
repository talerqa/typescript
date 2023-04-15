import React from 'react';

type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean,
}

function Accordion(props: AccordionPropsType) {
  console.log('Accordion rendered')
  return <div>
    <AccordionTitle title={props.titleValue}/>
    {!props.collapsed && <AccordionBody/>}

  </div>
}


type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendered')
  return (
    <div>
      {props.title}
    </div>
  )
}

function AccordionBody() {
  console.log("AccordionBody rendered")
  return (
    <div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  )
}

export default Accordion;