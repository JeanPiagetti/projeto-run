export const UserCard = ({users = []}) => {
    return users.map(user => {
        return <div className="card">
            <strong>{user.name}</strong>
            <span>{user.email}</span>
            <span>{user.phone}</span>
        </div>
    })
}