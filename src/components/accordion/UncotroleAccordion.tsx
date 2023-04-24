import React, {useState} from 'react';

type UncontroleAccordionType = {
  titleValue: string
}
type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}
export const UncontroleAccordion = (props: UncontroleAccordionType) => {

  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
      {collapsed && <AccordionBody/>}
    </div>
  );


  function AccordionTitle(props: AccordionTitlePropsType) {
    return (
      <div onClick={() => props.onClick()}>
        {props.title}
      </div>
    )
  }

  function AccordionBody() {
    return (
      <div>
        {collapsed
          ? <div>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>
          : <div></div>}
      </div>
    )
  }
};