import React from 'react';

export type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean,
  setStatusValueAccordion: ()=> void
}

export const ControledAccordion = (props: AccordionPropsType) => {
  return (<div>
    <AccordionTitle
      title={props.titleValue}
      setStatusValueAccordion={props.setStatusValueAccordion}
      collapsed={props.collapsed}/>
    {!props.collapsed && <AccordionBody/>}
  </div>)
}

type AccordionTitlePropsType = {
  title: string
  collapsed: boolean,
  setStatusValueAccordion: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
  console.log('AccordionTitle rendered')
  return (
    <div onClick={props.setStatusValueAccordion}>
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

export default ControledAccordion;