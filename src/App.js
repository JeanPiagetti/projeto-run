import { useEffect, useState } from 'react';
import './App.css';
import PaginationComponent from './components/pagination/PaginationComponent';
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
    <div>
      <PaginationComponent setCurrentPage={setCurrentPage} currentPage={currentPage} pages={pages}/>
      <UserCard  users={currentUsers}/>
    </div>    
  )
}

export default App;
