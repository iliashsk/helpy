import React from 'react';
//import Appli from '../../ratingcomponent/Appli'
import {Link} from 'react-router-dom'
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
          marginTop:"30px",
          background:"lightgreen"
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
       <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <SubMenu title="Rate It">
      <Item key="home" icon={<HomeOutlined />}>
    rating
      <Link to='/rating' ></Link>
    </Item>
    </SubMenu >
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
        <Item key="home" icon={<HomeOutlined />}>
    Videos
      <Link to='/video' ></Link>
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
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
    </Item>
    <Item key="home" icon={<HomeOutlined />}>
    home
      <Link to='/' ></Link>
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
            margin: '46px 16px 0',
            overflow: 'initial',

          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: "#8908",
              marginTop:"20px",
            }}
          >
            {content}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            background:"lightgreen",
            
          }}
        >
         Devloped By Softech Technology Pvt Ltd <sup>Copyright</sup>
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Sidebar;