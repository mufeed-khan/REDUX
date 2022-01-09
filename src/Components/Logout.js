import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../actions/User'

const Logout = () => {
    const user=useSelector(selectUser)
     const dispatch = useDispatch()

    const handlelogout=(e)=>{
        e.preventDefault()
        dispatch(logout())
    }
    return (
        <div>
            <h1>Hi <span style={{color:'blue'}}>{user.name}</span></h1>
            <button onClick={(e)=>handlelogout(e)}>Logout</button>
        </div>
        
    )
}

export default Logout
