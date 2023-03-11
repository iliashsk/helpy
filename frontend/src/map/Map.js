import React from "react";
import GoogleMapReact from 'google-map-react';
import { EnvironmentOutlined,CarOutlined}
 from '@ant-design/icons';
// import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({lat,long}){
  const defaultProps = {
    center: {
      lat: 23.775933998377525,
      lng: 88.28443697022986
    },
    zoom: 15
  };

  return (<>
    <div align='center'>
    <div style={{ height: '50vh', width: '50%' }} align='center'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      <AnyReactComponent
          lat={23.775933998377525}
          lng={88.28443697022986}
          text={<><EnvironmentOutlined
                style={{fontSize:'30px',color:'red'}}/>
                <p style={{fontSize:'20px',color:'blue'}}>Softech Technology</p></>
                }
         
          
        />

 {/* 
         <AnyReactComponent
          lat={23.765030921009558}
          lng={88.2643556753578}
          text={<><EnvironmentOutlined
                style={{fontSize:'30px',color:'red'}}/>
                <p style={{fontSize:'20px',color:'blue'}}>Neeraj Agrawal</p></>
                }
          
        />
          <AnyReactComponent
          lat={23.748204890380507}
          lng={88.24143002056519}
          text={<><CarOutlined
                style={{fontSize:'30px',color:'red'}}/>
                <p style={{fontSize:'20px',color:'blue'}}>Shantanu Bunker</p></>
                }
          
        />
        */}
      </GoogleMapReact>
    </div>
  
<button> <a href='https://www.google.com/maps/place/Softech+Technology/@23.7759364,88.2841243,18.04z/data=!4m6!3m5!1s0x39f973b7e047296b:0x399f696ddcdf53ff!8m2!3d23.7758757!4d88.2841759!16s%2Fg%2F11kc06mr_v' target='blank' >See on Google Map</a></button>
</div>
  </>);
}
