import React from 'react'; 
import ServiceManager from '@services/manager';
import Authenticated from '@pages/authenticated';

// Components
import { Link } from 'react-router-dom';
import TopBar from '@components/TopBar';
import Button from '@components/Button';

// Style
import './dashboard.css';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.auth = ServiceManager.getService('auth');
    this.user = this.auth.getUser();
  }

  render() {
    return (
      <Authenticated>
        <TopBar leftButton={<Link to="/lost/new"><Button theme={`clear`}> Novo Dispositivo </Button></Link>}
                subtitle={`Olá, ${this.user.name}!`}/>
        <div className={`action-menu`}>
          <Link to="/lost">
            <Button>Dispositivos perdidos</Button>
          </Link>
          <Link to="/lost/my">
            <Button>Meus dispositivos perdidos</Button>
          </Link>
        </div>
      </Authenticated>
    );
  }
}

export default Dashboard;