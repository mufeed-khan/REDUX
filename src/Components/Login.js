import  { useDispatch} from 'react-redux'
import { useState } from 'react'
import { login } from '../actions/User'

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

       const dispatch = useDispatch()
       const formData={name,email,password}

    const submitForm=(e)=>{
        e.preventDefault()
        dispatch(login(formData))
    }
    return (
        <div>
            <h1>Simpel Form</h1>
            
            <form onSubmit={(e)=>submitForm(e)}>
                <input type="text" name='name' value={name} onChange={(e) => { setName(e.target.value) }} placeholder='enter your name...' />  <br /><br />
                <input type="email" name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='enter your email...' />  <br /><br />

                <input type="password" name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='enter your password..' /> <br /><br />
                <button >Login</button>


            </form>

        </div>
    )
}

export default Login
