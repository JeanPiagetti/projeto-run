import { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './containers/user/bussiness/UserApi';
import { UserCard } from './containers/user/view/UserView';

function App() {
  useEffect(() => {},[])
  const [items,setItems] = useState()
  return (
    <div className='app'>
      <UserCard  users={getUsers(40)}/>
    </div>
  )
}

export default App;
