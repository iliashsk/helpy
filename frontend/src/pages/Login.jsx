import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import Card from '../components/Card'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isLoading } = useSelector((state) => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  // NOTE: no need for useEffect here as we can catch the
  // AsyncThunkAction rejection in our onSubmit or redirect them on the
  // resolution
  // Side effects shoulld go in event handlers where possible
  // source: - https://beta.reactjs.org/learn/keeping-components-pure#where-you-can-cause-side-effects

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        // NOTE: by unwrapping the AsyncThunkAction we can navigate the user after
        // getting a good response from our API or catch the AsyncThunkAction
        // rejection to show an error message
        
        navigate('/')
      })
      .catch(toast.error)
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading' >
      <br/>
      <br/>
      <br/>
      <br/>
        <h1 align='center'>
          <FaSignInAlt /> Login
        </h1>
        <p align='center'>Please log in to get support</p>
      </section>

      <section className='form' align='center'>
        <Card reverse={true}><form onSubmit={onSubmit}>
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter password'
              required
            />
          </div>
          <div className='form-group' >
            <button className='btn btn-block' style={{backgroundColor:'lightblue'}}>Submit</button>
          </div>
        </form></Card>
      </section>
    </>
  )
}

export default Login
