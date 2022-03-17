import { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './containers/user/bussiness/UserApi';
import { UserCard } from './containers/user/view/UserView';

function App() {

  const [users,setUsers] = useState([])
  const [itemsPerPage, setItemsPerPage] = useState(4)
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Math.ceil(users.length / itemsPerPage)
  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentUsers = users.slice(startIndex,endIndex)

  useEffect(() => {
    setUsers(getUsers(50))
  },[])
  


  return (
    <div className='app'>
      <div>
        {Array.from(Array(pages), (value,index) => (
          <button 
          className='' 
          value={index} 
          onClick={(e) => setCurrentPage(Number(e.target.value))}>
            {index + 1}
          </button>)
        )}
      </div>
      <UserCard  users={currentUsers}/>
    </div>
  )
}

export default App;
