import {useState} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './Auth'
export const Login = () => {
  debugger;
    const [user,setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const redirectPath = location.state?.path || '/'
    console.log('Redirect path:', redirectPath);

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, {replace:true})
    }

  return (
    <div>
        <label>
            Username:{''}
            <input type="text" onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
