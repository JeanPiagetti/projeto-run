export const UserCard = ({users = []}) => {
    return users.map((user,index) => {
        return (
              <div key ={index} className="card">
                <strong>{user.name}</strong>
                <span>{user.email}</span>
                <span>{user.phone}</span>
              </div>
        )
    })
}

