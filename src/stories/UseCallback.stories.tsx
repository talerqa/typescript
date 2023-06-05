import React, {useCallback, useMemo, useState} from 'react';


export default {
  title: 'UseCallback'
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
