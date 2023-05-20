import React from 'react';

type ItemsType = {
  value: any
  title: string
}

export type AccordionPropsType = {
  titleValue: string,
  collapsed: boolean,
  onChange: () => void
  items: ItemsType[]
  onClick: (value: any) => void
}

export const ControledAccordion = (props: AccordionPropsType) => {
  return (<div>
    <AccordionTitle
      title={props.titleValue}
      onChange={props.onChange}
      collapsed={props.collapsed}
    />
    {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
  </div>)
}

type AccordionTitlePropsType = {
  title: string
  collapsed: boolean,
  onChange: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {


  return (
    <h3 onClick={()=>props.onChange}>
      {props.title}
    </h3>
  )
}


export type AccordionBodyPropsType = {
  items: ItemsType[],
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <div>
      <ul>
        {props.items.map((m, index) =>
          <li
            onClick={() => {
              props.onClick(m.value)
            }}
            key={index}>{m.title}</li>)}
      </ul>
    </div>
  )
}

export default ControledAccordion;