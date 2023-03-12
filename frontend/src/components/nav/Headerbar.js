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
   

    <Item key="booking">
    My booking
      <Link to='/tickets' ></Link>
    </Item>
    <Item key="video">
    Videos
      <Link to='/video' ></Link>
    </Item>

    <SubMenu key="contact" title="Contact" icon={<DropboxOutlined />}>
      <Item key="contact">
  Contact
      <Link to='/contact' ></Link>
    </Item>
    <Item key="download">
  Notices
      <Link to='/prospectus' ></Link>
    </Item>
    </SubMenu>
    
    <Item key="dashboard">
    Dashboard
      <Link to='/dash' ></Link>
    </Item>

    <SubMenu key="utility" title="Utility" icon={<DropboxOutlined />}>
      <Item key="temp" icon={<HomeOutlined />}>
       Weather
      <Link to='/weather' ></Link>
       </Item>
       <Item key="voice" icon={<HomeOutlined />}>
       Voice Recorder
      <Link to='/voice' ></Link>
       </Item>
     <Item key="calculator"  icon={<HomeOutlined />}>
      F<sup>o</sup> to C<sup>o</sup> 
      <Link to='/calculator' ></Link>
      </Item>
    </SubMenu>
    

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