import React from 'react';

export type ItemsType = {
  value: any
  title: string
}

export type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean,
  onChange: () => void
  items: ItemsType[]
}

type AccordionTitlePropsType = {
  title: string
  collapsed: boolean,
  onChange: (collapsed: boolean) => void
}

export type AccordionBodyPropsType = {
  items: ItemsType[],
}

export const ControledAccordion = (props: AccordionPropsType) => {
  return (<div>
    <AccordionTitle title={props.titleValue} onChange={props.onChange} collapsed={props.collapsed}/>
    {!props.collapsed && <AccordionBody items={props.items} />}
  </div>)
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
  return (
    <h3 onClick={()=>props.onChange(!props.collapsed)}>
      {props.title}
    </h3>
  )
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <div>
      <ul>
        {props.items.map((m, index) =>
          <li
            key={m.value}>{m.title}</li>)}
      </ul>
    </div>
  )
}

export default ControledAccordion;