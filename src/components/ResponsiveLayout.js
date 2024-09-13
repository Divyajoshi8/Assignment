import React from 'react';
import { Col, Container, Dropdown, Row } from 'react-bootstrap';
import logo from '../assets/images/logo.jpg'; // Adjust the path based on your file structure
import notification from '../assets/images/notification.png';
import profile from '../assets/images/profile.png';

const ResponsiveLayout = () => {
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
          left: '15px', // Adjust as needed
          top: '60%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: 'auto'
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
        <img src={notification} alt="notification" style={{
          position: 'absolute',
          left: '15px', // Adjust as needed
          top: '60%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: 'auto',
          marginLeft: '90%'
        }} />
         <img src={profile} alt="profile" style={{
          position: 'absolute',
          left: '15px', // Adjust as needed
          top: '60%',
          transform: 'translateY(-50%)',
          width: '40px',
          height: 'auto',
          marginLeft: '95%'
        }} />
      </div>

      <Container fluid>
        <Row>
          {/* Side Bar with Logo */}
          <Col xs={12} md={2} style={{
            backgroundColor: '#FF8C00',  // Dark Orange
            color: 'white',
            height: '100vh',  // Full height for sidebar
            padding: '20px',
            maxWidth: '70px'  // Limit the sidebar width
          }}>
        
          </Col>

          {/* Main Content Area */}
          <Col xs={12} md={10} style={{ padding: '20px' }}>
            <div style={{
              backgroundColor: '#f8f9fa',
              padding: '20px',
              minHeight: '100vh'
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
