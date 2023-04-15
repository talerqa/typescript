import React, {useState} from 'react';

type UncontroleAccordionType = {
  titleValue: string
}
type AccordionTitlePropsType = {
  title: string
}
export const UncontroleAccordion = (props: UncontroleAccordionType) => {

  const [value, setValue] = useState<boolean>(false)

  return (
    <div>
      <AccordionTitle title={props.titleValue}/>
      <AccordionBody/>
      {/*{true && <AccordionBody/>}*/}
    </div>
  );


  function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendered')
    return (
      <div>
        {props.title}
      </div>
    )
  }

  function AccordionBody() {
    console.log('AccordionBody rendered')
    return (
      <div>
        <button onClick={() => {
          setValue(!value)
          console.log(value)
        }}> TOGGLE
        </button>
        {value
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