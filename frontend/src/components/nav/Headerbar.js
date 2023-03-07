import React,{useState} from 'react'
import {Menu} from 'antd'
import { HomeOutlined, AppstoreOutlined, SettingOutlined,UserOutlined,UserAddOutlined,DropboxOutlined,
ShoppingOutlined,DownOutlined,MailOutlined }
 from '@ant-design/icons';
import {Link,useNavigate} from 'react-router-dom'
//import { getAuth, updateProfile } from 'firebase/auth'

import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../features/auth/authSlice'


const {SubMenu,Item}=Menu;

const Headerbar=()=>{

	const [current,setCurrent]=useState("home");

	const handleClick=(e)=>{
		console.log(e.key);
		setCurrent(e.key);

	}




/////Logout////

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    navigate('/')
  }


	return(
    
  <Menu onClick={handleClick} defaultSelectedKeys={[current]} mode="horizontal"
   style={{position:"fixed",background:"lightcyan",width:"100%",zIndex:'10'}} >
    
    <Item key="home" icon={<HomeOutlined />}>
    Home
      <Link to='/' ></Link>
    </Item>
     <SubMenu key="RegistDetails" title="Packages" icon={<DownOutlined />}>
     <Item key="register" icon={<UserAddOutlined />} className="float-right">
     Registration
     <Link to='/regist' ></Link>
    </Item>
    <Item key="registdetails" icon={<UserAddOutlined />} className="float-right">
     Registered users
     <Link to='/registdetails' ></Link>
    </Item>
    </SubMenu>
   {/* <Item key="login" icon={<UserOutlined />} className="float-right"	>
      <Link to='/login' >Login</Link>
    </Item>
  */ }

    <SubMenu key="Shopping" title="about lakshadeep" icon={<DownOutlined />}>
      <Item key="Electronics" >
        Electronics
        <Link to='/electronics' ></Link>
      </Item>
      <Item key="three">
        Add Items
         <Link to='/additems' ></Link>
      </Item>
      
    </SubMenu>
  
   
        <Item key="two">
        about us
        <Link to='/about' />
        </Item>
    <Item key="gol" >
    Gol
      <Link to='/gol' ></Link>
    </Item>

 
  <Item key="support">
    Support
      <Link to='/support' ></Link>
    </Item>
    <Item key="booking">
    My booking
      <Link to='/tickets' ></Link>
    </Item>
    <Item key="video">
    Videos
      <Link to='/video' ></Link>
    </Item>
    <Item key="email" icon={<MailOutlined/>}>
    Send Email
      <Link to='/email' ></Link>
    </Item>
    <Item key="dashboard">
    Dashboard
      <Link to='/dash' ></Link>
    </Item>
    

            {user ? (<>
            <Item key="profile">
    Profile
      <Link to='/profile' ></Link>
    </Item>
            <Item key="logout" onClick={onLogout} className='logout'>
            
             logout
            </Item>
        
        </>) : (
          <>
           <Item key="login">
           Login
              <Link to='/login'>
                
              </Link>
            </Item>
            <Item key="register" className='signUp'>
            Sugnup
              <Link to='/register'>
                
              </Link>
            </Item>
          
          </>
        )}
       
    
  </Menu>
  
);
}
export default Headerbar;