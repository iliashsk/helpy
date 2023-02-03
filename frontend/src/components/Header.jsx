import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  return (<>
    
      <nav class="navbar navbar-expand-md navbar-dark bg-blue" sltyle>
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            <div>
        <Link to='/'>Home</Link>|
      </div>
        </ul>
    </div>
    
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
            {user ? (
          <li align="right">
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li align="right">
              <Link to='/login'>
                <FaSignInAlt /> Login 
              </Link>
            </li>
            <li align="right">
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
            <li align="right">
              <Link to='/admin'>
                <FaUser /> Admin
              </Link>
            </li>
          </>
        )}
        </ul>
    </div>
</nav>
    
  
</>);
}
export default Header
