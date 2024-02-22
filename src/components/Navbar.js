import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo.svg";
import "../App.scss";
import { Link } from "react-router-dom";

import { IoLogoInstagram, IoLogoTwitter, IoLogoLinkedin, IoSunnyOutline } from "react-icons/io5";
import { slugify } from '../utils/helpers'

const mainNavItems = [
  { url: '/', label: 'Home', mobileOnly: true},
  { url: '/me', label: 'About'},
  { url: '/projects', label: 'Projects'},
  { url: '/resume', label: 'Resumé'},
]

const socialNavItems = [
  { url: 'https://www.instagram.com/danielpsnz', icon: <IoLogoInstagram />, label: 'Instagram' },
  { url: 'https://www.twitter.com/danielpsnz', icon: <IoLogoTwitter />, label: 'Twitter' },
  { url: 'https://www.linkedin.com/in/danielpsnz/', icon: <IoLogoLinkedin />, label: 'Linkedin' },
]

export const Navigation = ({ onUpdateTheme }) => {
  return (
    <section className="navigation">
      <div className="container">
        <div className="nav-wrapper">

        <div className="nav">
          <Navbar.Brand href="/" className="item brand">
            <img src={logo} className="logo" alt="bird"/>
            <span>Daniel Pérez</span>
          </Navbar.Brand>
          
          <nav className="nav-content">
            {mainNavItems.map((item) => (
              <Nav.Item className="nav-item-outer" key={item.url}>
                <Nav.Link
                  as={Link}
                  to={item.url}
                  key={item.label}
                  className={`item ${slugify(item.label)} ${item.mobileOnly ? 'mobile-only' : ''}`}
                >
                  <span>{item.label}</span>
                </Nav.Link>
              </Nav.Item>
            ))}

            {socialNavItems.map((item) => (
              <div className="nav-item-outer" key={item.url}>
                <img src={item.icon} alt={item.label} className="nav-image" />
                <a
                  href={item.url}
                  key={item.label}
                  className={`desktop-only item ${slugify(item.label)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{item.icon}</span>
                </a>
              </div>
            ))}
          </nav>
          
          <div className="theme-toggle">
            <button onClick={onUpdateTheme}>
              <IoSunnyOutline className="sun"/>
            </button>
          </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navigation;