import React from 'react'; 
import Authenticated from '@pages/authenticated';
import ServiceManager from '@services/manager';

// COMPONENTS
import LostDevicesList from '@components/LostDevices/List';
import TopBar from '@components/TopBar';

class LostDevices extends React.Component {
  constructor(props) {
    super(props);
    
    this.auth = ServiceManager.getService('auth');
    this.user = this.auth.getUser();
    
  }

  render() {
    return (
      <Authenticated>
        <TopBar subtitle={`Dispositivos perdidos`} />
        <LostDevicesList
          filter={ device => device.owner.id !== this.user.id }/>
      </Authenticated>
    );
  }
}

export default LostDevices;