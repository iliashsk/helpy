import React from 'react';
//import Appli from '../../ratingcomponent/Appli'
import {Link,useNavigate} from 'react-router-dom'
import { getAuth} from 'firebase/auth'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
  MailOutlined,
  DeleteOutlined,
  CarOutlined,
  PoweroffOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const {SubMenu,Item}=Menu;
const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,
  HomeOutlined,
  
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));



const Sidebar = ({content}) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();


const navigate=useNavigate()
const auth=getAuth();
 const onLogout = () => {
    auth.signOut()
    navigate('/');
    navigate(0);
  }



  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
         
          background:"grey",
         
          
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />



        <Menu theme="blue" mode="inline" key="Home" >
       <Item key="home" color="red" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    
    <Item key="mechanic" icon={<HomeOutlined />}>
    Managemechanics
      <Link to='/mechanic' ></Link>
    </Item>

        <Item key="vdetails" icon={<CarOutlined/>}>
    VehicleDetails
      <Link to='/vdetails' ></Link>
    </Item>

    <Item key="vdelete" icon={<DeleteOutlined />}>
    DeleteVehicle
      <Link to='/vdelete' ></Link>
    </Item>

    <Item key="email" icon={<MailOutlined/>}>
    Send Email
      <Link to='/email' ></Link>
    </Item>

    
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>

    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>

    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>

    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>

    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="logout" icon={<PoweroffOutlined /> }>
      <button style={{color:"red"}} onClick={onLogout} >Logout</button>
    </Item>

   </Menu>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft:200,
        }}
      >
       
        <Content
          style={{
            backgroundColor:"grey",
            overflow: 'initial',

          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              color:"black",
              marginTop:"20px",
            }}
          >
            {content}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            background:"#623",
            
          }}
        >
         Devloped By Softech Technology Pvt Ltd <sup>Copyright</sup>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;