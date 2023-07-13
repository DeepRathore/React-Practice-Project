// import necessary components, hooks, and assets from different libraries and files.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import NavItem from 'react-bootstrap/NavItem';
import Dropdown from 'react-bootstrap/Dropdown';

// function component
const Header = (props) => {
  const mode = props.mode;

  // these two lines are the usestate hooks, 
  // which declare two variabl here to use in component 
  // scrolled will store whther the page scrolled and activeLink will store which nav link is active
  var [activeLink, setActiveLink] = useState('home');
  var [scrolled, setScrolled] = useState(false);

  // useEffect hook is used to use eventListeners 
  //  When the user scrolls, it updates the scrolled state variable 
  // based on the scroll position. 
  // The cleanup function returned from the effect removes the event listener when the component is unmounted. 
  useEffect(() => {
    const onScroll = () => {
     setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", onScroll);

    return  () => window.removeEventListener("scroll", onScroll);
  }, [])

  // this function will update the value of activeLink
  // a function expression
  const updateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <>
      <Navbar expand="lg" className={`${scrolled ? ' scrolled' : ''}${mode == 'dark' ? 'dark-nav' : ''}`}>
        <Container>
          <Navbar.Brand href="#home">
            {/* give brand logo here  */}
            <img src={logo} alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav mx-2">
            <Nav className="me-auto">
              <Link to="/" className={activeLink === 'home' ? 'active-nav-link' : 'nav-link'} onClick={() => updateActiveLink('home')}>Home</Link>
              <Link to="/skills" className={activeLink === 'skills' ? 'active-nav-link' : 'nav-link'} onClick={() => updateActiveLink('skills')}>Skills</Link>
              <Link to="/about" className={activeLink === 'about' ? 'active-nav-link' : 'nav-link'} onClick={() => updateActiveLink('about')}>About</Link>
              <Dropdown as={NavItem} className={activeLink === 'projects' ? 'active-nav-link' : 'nav-link'} onClick={() => updateActiveLink('projects')}>
                <Dropdown.Toggle>Practice</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><Link to="/text-utils">Text Utils</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
            <span className="social-callouts">
              <div className="icons">
                <a href="https://www.facebook.com/"><i className="fa-brands fa-linkedin-in"/></a>
                <a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"/></a>
                <a href="https://www.facebook.com/"><i className="fa-brands fa-instagram"/></a>
              </div>
              <button className="contact" onClick={() => console.log('Connect')}><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
        <div className="form-check form-switch text-light">
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor='flexSwitchCheckDefault'>Enable DarkMode</label>
          </div>
      </Navbar>
    </>
  );
}

export default Header;
