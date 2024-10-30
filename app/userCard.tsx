import {DefaultSession} from 'next-auth';
export function UserCard({user}:{user:DefaultSession["user"]}) {
  return (
    <div className="card">
        <div className="card-body"> 
            <p>Currently logged in user</p>
            <h5 className="card-title">{user?.name}</h5>
            <p className="card-title">{user?.email}</p>  

        </div>
    </div>
  )
  }