import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const ResponsiveLayout = () => {
  return (
    <div>
      {/* Top Bar */}
      <div style={{
        backgroundColor: '#FF8C00',  // Dark Orange
        color: 'white',
        padding: '10px',
        textAlign: 'center',
        fontSize: '24px'
      }}>
        Top Bar
      </div>

      <Container fluid>
        <Row>
          {/* Side Bar with Smaller Width */}
          <Col xs={12} md={2} style={{
           backgroundColor: '#FF8C00',  // Dark Orange
            color: 'white',
            height: '100vh',  // Full height for sidebar
            padding: '20px',
            maxWidth: '100px'  // Limit the sidebar width
          }}>
            Sidebar
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
