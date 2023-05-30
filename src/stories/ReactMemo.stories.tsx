import React, {useState} from 'react';

export default {
  title: 'React.Memo demo'
}

const NewMessagesCounter = (props: any) => {
  console.log('NEWMESSCOUNTER')
  return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
  console.log('USERS')
  return <div>
    {props.users.map((u, i) => <div key={i}>{u}</div>)}
  </div>
}

const User = React.memo(UsersSecret)
const MessagesCounter = React.memo(NewMessagesCounter)

export const Example1 = () => {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Lesha', 'MIsha', 'Dima'])

  const addUser = () => {
    const newUser = [...users, 'fsdfsdf']
    setUsers(newUser)
  }

  return <>
    <button onClick={() => setCounter(counter + 1)}>INC
    </button>
    <button onClick={addUser}>Add user</button>
    <MessagesCounter count={counter}/>
    <User users={users}/>
  </>

}