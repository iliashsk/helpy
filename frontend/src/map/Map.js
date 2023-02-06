import React from "react";
import GoogleMapReact from 'google-map-react';
import { EnvironmentOutlined,CarOutlined}
 from '@ant-design/icons';
 import { MapContainer, TileLayer, useMap,Marker,Popup } from 'react-leaflet'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({lat,long}){
  const defaultProps = {
    center: {
      lat: 23.756922370254834,
      lng: 88.23021729479196
    },
    zoom: 13
  };

  return (<>
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={23.756922370254834}
          lng={88.23021729479196}
          text={<><EnvironmentOutlined
                style={{fontSize:'30px',color:'red'}}/>
                <p style={{fontSize:'20px',color:'blue'}}>Iliash Sk</p></>
                 }
          
        />

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
      </GoogleMapReact>
    </div>


  </>);
}
