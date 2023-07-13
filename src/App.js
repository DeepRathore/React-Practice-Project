import './styles.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import TextForm from './components/TextForm';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import Alert from './components/Alert';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Practice1Tab from './components/Practice1Tab';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [showAlert, setShowAlert] = useState(true);

  const [alert, setAlert] = useState({
    msg: 'Grab The Amazing Offers.',
    class: 'primary',
    type: 'Success'
  })

  const handleCloseAlert = () => {
    setShowAlert(false);
  }

  const toggleMode = () => {
    setShowAlert(true);

    if (mode == 'dark') {
      setMode('light');
      document.body.classList.remove('dark-mode');
      setAlert({
        msg: 'Light Mode On.',
        class: 'primary',
        type: 'Success'
      })
    } else {
      setMode('dark');
      document.body.classList.add('dark-mode');
      setAlert({
        msg: 'Dark Mode On.',
        class: 'primary',
        type: 'Success'
      })
    }
  }

  function Users() {
    return <h2>Users</h2>;
  }

  const user = {
    name: "Test",
    lastName: "Verma"
  }
  // how to use createElement 
  // const ele = React.createElement(element.type, element.props, onclick: function() {})
  // return ele;

  // JSX code
  return (
    <>
      <Router>
        {/* passing data to child component and toggleMode is a eventlistener function here */}
        <Header uData={user} person={{ name: 'Lin Lanying added', imageId: '1bX5QH6' }} mode={mode} toggleMode={toggleMode} />
        <Alert showAlert={showAlert} onClose={handleCloseAlert} msg={alert.msg} class={alert.class} type={alert.type} />

        <nav>
          <ul>
            <li>
              <Link to="/skills">Skills </Link>
            </li>
          </ul>
        </nav>
        <Practice1Tab></Practice1Tab>

        {/* use client side routing */}
        <Switch>
          <Route exact path="/skills" component={<Skills/>} />
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/text-utils">
            <TextForm heading={'Test'} setAlert={setAlert} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

// class example extends React Component {
//   render() {
//     return html;
//   }
// }

// ReactDOM.render(<example />, document.getElementById('root'));
