import React, {KeyboardEvent, useCallback, useEffect, useMemo, useState} from 'react';
import s from '../components/select/Select.module.css';

export default {
  title: 'useMemo'
}

export const DifficultCountingExample = () => {

  const [a, setA] = useState(5)
  const [b, setB] = useState(5)

  let resultA = 1
  let resultB = 1

  resultA = useMemo(() => {
    let tempResultA = 1
    for (let i = 1; i <= a; i++) {
      let fake = 0
      while (fake < 100000000) {
        fake++
        const fakeValue = Math.random()
      }
      tempResultA = tempResultA * i
    }
    return tempResultA
  }, [a])


  for (let i = 1; i <= b; i++) {
    resultB = resultB * i
  }

  return <>
    <input value={a} onChange={(e) => {
      setA(Number(e.currentTarget.value))
    }}/>
    <input value={b} onChange={(e) => {
      setB(Number(e.currentTarget.value))
    }}/>
    <hr/>
    <div>
      result a: {resultA}
    </div>
    <div>
      result b: {resultB}
    </div>
  </>
}

const UsersSecret = (props: { users: Array<string> }) => {
  // console.log('USERS')
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}

const User = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {

//  console.log('HELPS TO REACT MEMO')
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Lesha', 'MIsha', 'Dima', 'tr', 'TRRD'])

  const newArray = useMemo(() => {
    return users.filter(user => user.toLowerCase().indexOf('a') > -1)
  }, [users])


  const addUser = () => {
    const newUser = [...users, 'fsdfaafsdf']
    setUsers(newUser)
  }


  return <>
    <button onClick={() => setCounter(counter + 1)}>INC</button>
    <button onClick={addUser}>Add user</button>
    {counter}
    <User users={newArray}/>
  </>
}

export const SelectComponentUseMemo = () => {
  const [value, setValue] = useState('1')
  type ItemsType = {
    city: string
    value: string
  }
  type SelectPropsType = {
    value: any
    onChange: (newValue: string) => void
    items: ItemsType[]
  }

  const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredElement)

    ///ВЕРНУТЬСЯ
    useEffect(() => {
      setHoveredElement(props.value)
    }, [props.value])

    const toggleItem = () => setActive(!active)
    const onItemClick = (value: string) => {
      props.onChange(value)
      toggleItem()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        for (let i = 0; i < props.items.length; i++) {
          if (props.items[i].value === hoveredElement) {
            const pretendentElement = e.key === 'ArrowDown'
              ? props.items[i + 1]
              : props.items[i - 1]
            if (pretendentElement) {
              props.onChange(pretendentElement.value)
              return
            } else return;
          }
        }
        if (!selectedItem) {
          props.onChange(props.items[0].value)
        }
      }

      if (e.key === 'Enter' || e.key === 'Escape') {
        setActive(false)
      }
    }

    return (<div className={s.select_wrapper} onKeyUp={onKeyUp} tabIndex={0}>
        <div className={s.select__find + ' ' + (active ? s.active : ' ')}>
          <h3 onClick={toggleItem}>
            {selectedItem && selectedItem.city}
          </h3>
          {active &&
            <div className={s.select_items}>
              {props.items.map(item =>
                <div
                  onMouseEnter={() => {
                    setHoveredElement(item.value)
                  }}
                  key={item.value}
                  className={s.item + ' ' + (hoveredItem === item ? s.selected_element : ' ')}
                  onClick={() => onItemClick(item.value)}
                >
                  {item.city}
                </div>)}
            </div>}
        </div>
      </div>
    )
  }

  const args = {
    args: {
      value: value,
      items: [
        {city: 'Minsk', value: '1'},
        {city: 'Kharkiv', value: '2'},
        {city: 'Klichev', value: '3'},
        {city: 'Harkiv', value: '4'},
        {city: 'Wroclaw', value: '5'},
        {city: 'Brest', value: '6'},
        {city: 'Gdansk', value: '7'},
        {city: 'Kiev', value: '8'},
        {city: 'Warsawa', value: '9'},
      ],
      onChange: setValue,
    }
  }
  return (<div>
      <Select
        value={args.args.value}
        items={args.args.items}
        onChange={args.args.onChange}
      />
      <hr/>
      <div style={{marginLeft: '70px'}}>
        <Select
          value={args.args.value}
          items={args.args.items}
          onChange={args.args.onChange}
        />
      </div>
      <div style={{marginLeft: '140px'}}>
        <hr/>
        <Select
          value={args.args.value}
          items={args.args.items.filter(el =>
            el.city.toLowerCase().includes('i'))
          }
          onChange={args.args.onChange}
        />
      </div>
    </div>

  )
}

export const HelpsToReactMemoLikeUseCallback = () => {
  const [counter, setCounter] = useState(0)
  const [books, setBooks] = useState(['Js', 'React', 'Css', 'HTML'])


  const memoizedAddBook = useMemo(() => {
    return () => {
      const newBook = [...books, 'Angular']
      setBooks(newBook)
    }
  }, [books])

  const memoizedAddBook2 = useCallback(() => {
    const newBook = [...books, 'Angular']
    setBooks(newBook)
  }, [books])


  return <>
    <button onClick={() => setCounter(counter + 1)}>INC</button>
    {counter}
    <Book books={books} addBook={memoizedAddBook2}/>
  </>
}

type BookSecretType = { books: Array<string>; addBook: () => void }
const BooksSecret = (props: BookSecretType) => {
  console.log('BookSecret')
  return <div>
    <button onClick={props.addBook}>Add book</button>
    {props.books.map((book, i) => <div key={i}>{book}</div>)}
  </div>
}

const Book = React.memo(BooksSecret)

// export const memoSelect = () => {
//
//   const items = [
//     {city: 'Minsk', value: '1'},
//     {city: 'Kharkiv', value: '2'},
//     {city: 'Klichev', value: '3'},
//     {city: 'Harkiv', value: '4'},
//     {city: 'Wroclaw', value: '5'},
//     {city: 'Brest', value: '6'},
//     {city: 'Gdansk', value: '7'},
//     {city: 'Kiev', value: '8'},
//     {city: 'Warsawa', value: '9'},
//   ]
//   const [value, setValue] = useState<string>('1')
//
//   const [active, setActive] = useState(false);
//   const [hoveredElement, setHoveredElement] = useState(items)
//
//   const selectedItem = items.find(item => item.value === value)
//   const hoveredItem = items.find(item => item.value === value)
//
//   console.log()
//   ///ВЕРНУТЬСЯ
//   useEffect(() => {
//     //setHoveredElement(value)
//     setValue(value)
//   }, [value])
//
//   const toggleItem = () => setActive(!active)
//
//   const onItemClick = (value: string) => {
//     setValue(value)
//     toggleItem()
//   }
//
//   const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
//     if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
//       for (let i = 0; i < items.length; i++) {
//         // @ts-ignore
//         if (items[i].value === hoveredElement) {
//           const pretendentElement = e.key === 'ArrowDown'
//             ? items[i + 1]
//             : items[i - 1]
//           if (pretendentElement) {
//             setValue(pretendentElement.value)
//             return
//           } else return;
//         }
//       }
//       if (!selectedItem) {
//         setValue(items[0].value)
//       }
//     }
//
//     if (e.key === 'Enter' || e.key === 'Escape') {
//       setActive(false)
//     }
//   }
//
//   return (<div className={s.select_wrapper} onKeyUp={onKeyUp} tabIndex={0}>
//       <div className={s.select__find + ' ' + (active ? s.active : ' ')}>
//         <h3 onClick={toggleItem}>
//           {selectedItem && selectedItem.city}
//         </h3>
//         {active &&
//           <div className={s.select_items}>
//             {items.map(item =>
//               <div
//                 onMouseEnter={() => {
//                   setValue(item.value)
//                 }}
//                 key={item.value}
//                 className={s.item + ' ' + (hoveredItem === item ? s.selected_element : ' ')}
//                 onClick={() => onItemClick(item.value)}
//               >
//                 {item.city}
//               </div>)}
//           </div>}
//       </div>
//
//
//     </div>
//   )
// }