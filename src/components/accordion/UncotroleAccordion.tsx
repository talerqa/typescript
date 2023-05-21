import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from './Reducer';

type UncontroleAccordionType = {
  titleValue: string
}
type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}


export type ActionType = {
  type: string,
}

export const UncontroleAccordion = (props: UncontroleAccordionType) => {

//  const [collapsed, setCollapsed] = useState<boolean>(false)
  const [state, dispatchCollapsed] = useReducer(reducer, {
    collapsed: false
  })

  return (
    <div>
      <AccordionTitle title={props.titleValue} onClick={() => dispatchCollapsed({type: TOGGLE_COLLAPSED})}/>
      {state.collapsed && <AccordionBody/>}
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
        {state.collapsed
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