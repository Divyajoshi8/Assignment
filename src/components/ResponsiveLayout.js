import React, { useState } from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import call from '../assets/images/call.png';
import contractorIcon from '../assets/images/contractor.png';
import email from '../assets/images/email.png';
import exit from '../assets/images/exit.png';
import logo from '../assets/images/logo.jpg';
import notification from '../assets/images/notification.png';
import org from '../assets/images/org.png';
import profile from '../assets/images/profile.png';
import userIcon from '../assets/images/user.png';
import vendorsIcon from '../assets/images/vendors.png';
import vip from '../assets/images/vip.png';
import visitorIcon from '../assets/images/visitor.png';

const ResponsiveLayout = () => {
  const [activeIcon, setActiveIcon] = useState(null); // State to track the active icon

  const handleClick = (iconName) => {
    setActiveIcon(iconName); // Set the clicked icon as active
  };

  const getIconStyle = (iconName) => ({
    width: '30px',
    height: 'auto',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: activeIcon === iconName ? 'scale(1.2)' : 'scale(1)', // Enlarge the icon when active
    boxShadow: activeIcon === iconName ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none', // Add shadow when active
  });

  const getTopBarIconStyle = (iconName) => ({
    width: '40px',
    height: 'auto',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: activeIcon === iconName ? 'scale(1.2)' : 'scale(1)', // Enlarge when active
    boxShadow: activeIcon === iconName ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none', // Add shadow when active
    position: 'absolute',
    top: '60%',
    transform: 'translateY(-50%)',
  });

  return (
    <div>
      {/* Top Bar with Logo */}
      <div style={{
        backgroundColor: '#FF8C00',  // Dark Orange
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontSize: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}>
        <img src={logo} alt="Logo" style={{
          position: 'absolute',
          left: '15px',
          top: '60%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: '50px'
        }} />
        <div style={{ marginLeft: '65%', fontSize: '24px' }}> {/* Adjust the margin-left to make room for the logo */}
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{
                backgroundColor: 'white',
                color: 'black',
                border: '1px solid #FF8C00'
              }}
            >
              Embassy Tech Village
            </Dropdown.Toggle>

            <Dropdown.Menu
              style={{
                backgroundColor: 'white',
                borderColor: '#FF8C00'
              }}
            >
              <Dropdown.Item href="#/action-1" style={{ color: 'black' }}>Action 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2" style={{ color: 'black' }}>Action 2</Dropdown.Item>
              <Dropdown.Item href="#/action-3" style={{ color: 'black' }}>Action 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        {/* Notification and Profile Icons */}
        <img
          src={notification}
          alt="notification"
          style={{
            ...getTopBarIconStyle('notification'),
            left: '90%' // Adjust as needed
          }}
          onClick={() => handleClick('notification')}
        />
        <img
          src={profile}
          alt="profile"
          style={{
            ...getTopBarIconStyle('profile'),
            left: '95%' // Adjust as needed
          }}
          onClick={() => handleClick('profile')}
        />
      </div>

      <Container fluid>
        <Row>
          {/* Sidebar with Icons */}
          <Col xs={12} md={2} style={{
            backgroundColor: '#FF8C00',  // Dark Orange
            color: 'white',
            height: '100vh',  // Full height for sidebar
            padding: '20px',
            maxWidth: '70px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            {/* Icons Container */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px',
            }}>
              <img
                src={contractorIcon}
                alt="Contractor"
                style={getIconStyle('contractor')}
                onClick={() => handleClick('contractor')}
              />
              <img
                src={userIcon}
                alt="User"
                style={getIconStyle('user')}
                onClick={() => handleClick('user')}
              />
              <img
                src={vendorsIcon}
                alt="Vendors"
                style={getIconStyle('vendors')}
                onClick={() => handleClick('vendors')}
              />
              <img
                src={visitorIcon}
                alt="Visitor"
                style={getIconStyle('visitor')}
                onClick={() => handleClick('visitor')}
              />
              <img
                src={call}
                alt="Call"
                style={getIconStyle('call')}
                onClick={() => handleClick('call')}
              />
              <img
                src={email}
                alt="Email"
                style={getIconStyle('email')}
                onClick={() => handleClick('email')}
              />
              <img
                src={org}
                alt="Org"
                style={getIconStyle('org')}
                onClick={() => handleClick('org')}
              />
              <img
                src={vip}
                alt="VIP"
                style={getIconStyle('vip')}
                onClick={() => handleClick('vip')}
              />
              <img
                src={exit}
                alt="Exit"
                style={getIconStyle('exit')}
                onClick={() => handleClick('exit')}
              />
            </div>
          </Col>

          {/* Main Content Area */}
          <Col xs={12} md={10} style={{ padding: '20px' }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              minHeight: '100vh',
            }}>
              Main Content Section
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResponsiveLayout;
