import React, { useState } from 'react';
import { Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp, FaEye, FaPlus, FaSearch, FaTimes } from 'react-icons/fa';
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
  const [content, setContent] = useState('vendors'); // State to track main content
  const [searchInput, setSearchInput] = useState(''); // State for search input
  const [pageNumber, setPageNumber] = useState(1); // State for page number
  const [showDetails, setShowDetails] = useState(null); 
  const [showSuccess, setShowSuccess] = useState(false);
  const [vendors, setVendors] = useState([]); // State for vendor data
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    comingFrom: '',
    company: '',
    hostName: '',
    purposeOfVisit: '',
    idType: '',
    idNumber: '',
    dateOfVisit: '',
    entryTime:'',
    exitTime:'',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new vendor to the list
    setVendors([...vendors, formData]);
    // Clear the form data
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      comingFrom: '',
      company: '',
      hostName: '',
      purposeOfVisit: '',
      idType: '',
      idNumber: '',
      dateOfVisit: '',
      entryTime:'',
      exitTime:'',
    });
    // Show success message
    setShowSuccess(true);
    // Hide the form
    setShowForm(false);
    // Hide the success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleClick = (iconName) => {
    setActiveIcon(iconName); // Set the clicked icon as active
    setContent(iconName); // Update content based on icon clicked
  };

  const handlePageChange = (direction) => {
    setPageNumber((prev) => (direction === 'up' ? prev + 1 : prev > 1 ? prev - 1 : prev));
  };



  
  const getIconStyle = (iconName) => ({
    width: '30px',
    height: 'auto',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: activeIcon === iconName ? 'scale(1.2)' : 'scale(1)',
    boxShadow: activeIcon === iconName ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
  });

  const getTopBarIconStyle = (iconName) => ({
    width: '40px',
    height: 'auto',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    transform: activeIcon === iconName ? 'scale(1.2)' : 'scale(1)',
    boxShadow: activeIcon === iconName ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
    position: 'absolute',
    top: '60%',
    transform: 'translateY(-50%)',
  });

  const handleToggleDetails = (index) => {
    setShowDetails(showDetails === index ? null : index); // Toggle details visibility
  };

  const dummyData = [
    {
      name: 'Vendor 1',
      contact: '9876543210',
      dateOfVisit: '2024-09-15',
      entryTime: '10:00 AM',
      visitingCompany: 'Company A',
      typeOfWork: 'Maintenance',
      idNumber: '12345',
      exitTime: '4:00 PM',
      purpose: 'Reading', // Add purpose field
    },
    {
      name: 'Vendor 2',
      contact: '9123456789',
      dateOfVisit: '2024-09-14',
      entryTime: '9:00 AM',
      visitingCompany: 'Company B',
      typeOfWork: 'Repair',
      idNumber: '67890',
      exitTime: '3:00 PM',
      purpose: 'Modifying', // Add purpose field
    },
    {
      name: 'Vendor 3',
      contact: '9234567891',
      dateOfVisit: '2024-09-13',
      entryTime: '11:00 AM',
      visitingCompany: 'Company C',
      typeOfWork: 'Delivery',
      idNumber: '54321',
      exitTime: '5:00 PM',
      purpose: 'Reading', // Add purpose field
    },
  ];

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
        <div style={{ marginLeft: '65%', fontSize: '24px' }}>
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
            height: '100vh',
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
              {content === 'vendors' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ fontSize: '20px', whiteSpace:'nowrap' }}>List of Vendors</h2>
                    <button
                      className="add-new-btn"
                      style={{
                        backgroundColor: '#FF8C00',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        marginLeft: '89%',
                        width: 'auto',
                        height:'40px',
                        whiteSpace: 'nowrap' // Prevent text from wrapping
                      }}
                      onClick={() => setShowForm(true)}
                    >
                      <FaPlus style={{ marginRight: '5px' }} /> Add New
                    </button>

      {showForm && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
            width: '600px',
            zIndex: 1000,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '20px', color: '#FF8C00' }}>Add Vendors</h2>
            <FaTimes
              onClick={() => setShowForm(false)}
              style={{ cursor: 'pointer', fontSize: '20px', color: '#FF8C00' }}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ flex: '1 1 30%' }}>
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>
              <div style={{ flex: '1 1 30%' }}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>
              <div style={{ flex: '1 1 30%' }}>
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>

              {/* Row 2 */}
              <div style={{ flex: '1 1 30%' }}>
                <label>Coming From</label>
                <input
                  type="text"
                  name="comingFrom"
                  value={formData.comingFrom}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>
              <div style={{ flex: '1 1 30%' }}>
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>
              <div style={{ flex: '1 1 30%' }}>
                <label>Host Name</label>
                <input
                  type="text"
                  name="hostName"
                  value={formData.hostName}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>

              {/* Row 3 */}
              <div style={{ flex: '1 1 30%' }}>
                <label>Purpose of Visit</label>
                <input
                  type="text"
                  name="purposeOfVisit"
                  value={formData.purposeOfVisit}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>
              <div style={{ flex: '1 1 30%' }}>
                <label>ID Type</label>
                <input
                  type="text"
                  name="idType"
                  value={formData.idType}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>
              <div style={{ flex: '1 1 30%' }}>
                <label>ID Number</label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>

              {/* Row 4 */}
              <div style={{ flex: '1 1 30%' }}>
                <label>Date of Visit</label>
                <input
                  type="date"
                  name="dateOfVisit"
                  value={formData.dateOfVisit}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #FF8C00',
                  }}
                />
              </div>

              <div style={{ flex: '1 1 30%' }}>
    <label>Entry Time</label>
    <input
      type="time"
      name="entryTime"
      value={formData.entryTime}
      onChange={handleInputChange}
      style={{
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #FF8C00',
      }}
    />
  </div>

  <div style={{ flex: '1 1 30%' }}>
    <label>Exit Time</label>
    <input
      type="time"
      name="exitTime"
      value={formData.exitTime}
      onChange={handleInputChange}
      style={{
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #FF8C00',
      }}
    />
  </div>
            </div>

            <button
              type="submit"
              style={{
                backgroundColor: '#FF8C00',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '20px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              Submit
            </button>
          </form>
          </div>
      )}

{showSuccess && (
                      <div
                        style={{
                          position: 'fixed',
                          top: '10%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: '#d4edda',
                          color: '#155724',
                          padding: '10px 20px',
                          borderRadius: '5px',
                          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                          zIndex: 1000,
                        }}
                      >
                        Successfully submitted!
                      </div>
                    )}

                    
                  </div>

 {/* Pagination Section */}
 <div style={{ marginTop: '20px' , display: 'flex', alignItems: 'center' }}>
                      <p style={{ marginRight: '10px', fontSize: '16px' }}>Page:</p>
                      <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
                        <input
                          type="number"
                          value={pageNumber}
                          onChange={(e) => setPageNumber(parseInt(e.target.value))}
                          style={{
                            width: '40px',
                            height: '30px',
                            textAlign: 'center',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                            fontSize: '16px',
                          }}
                        />
                        <div style={{
                          display: 'flex',
                          flexDirection: 'column',
                          position: 'absolute',
                          right: '-20px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                        }}>
                          <FaChevronUp
                            onClick={() => handlePageChange('up')}
                            style={{
                              cursor: 'pointer',
                              fontSize: '14px',
                              color: '#FF8C00',
                              marginBottom: '5px',
                            }}
                          />
                          <FaChevronDown
                            onClick={() => handlePageChange('down')}
                            style={{
                              cursor: 'pointer',
                              fontSize: '14px',
                              color: '#FF8C00',
                            }}
                          />
                        </div>
                      </div>
                    </div>


                  {/* Search Box */}
                  <div style={{ marginTop: '-39px', position: 'relative', width: '100px', marginLeft: '95%' }}>
  <input
    type="text"
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
    placeholder="Search"
    style={{
      width: '200%',
      height: '30px',
      padding: '10px',
      borderRadius: '30px',
      outline: 'none', // Remove default outline
      backgroundColor: '#faf4f0', // Light orange shade
      border: '1px transparent rgba(245, 211, 186, 0.5)', // Transparent version of the background color
      paddingLeft: searchInput ? '10px' : '35px', // Adjust padding when typing
      fontSize: '16px',
    }}
  />
  {!searchInput && (
    <FaSearch
      style={{
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)',
        color: '#999',
      }}
    />
  )}
</div>

               {/* Table */}
<Table bordered hover style={{ marginTop: '20px', borderColor: '#fffff4', width: '195vh', borderCollapse: 'collapse' }}>
  <thead>
    <tr style={{ height: '65px', textAlign: 'center' }}>
      <th style={{ backgroundColor: 'orange', color: 'white' }}>Name of the Vendor</th>
      <th style={{ backgroundColor: 'orange', color: 'white' }}>Contact Number</th>
      <th style={{ backgroundColor: 'orange', color: 'white' }}>Date of Visit</th>
      <th style={{ backgroundColor: 'orange', color: 'white' }}>Entry Time</th>
      <th style={{ backgroundColor: 'orange', color: 'white' }}>Visiting Company</th>
      <th style={{ backgroundColor: 'orange', color: 'white' }}>Type of Work</th>
      <th style={{ backgroundColor: 'orange', color: 'white' }}>ID Number</th>
      <th style={{ backgroundColor: 'orange', color: 'white' }}>Exit Time</th>
      <th style={{ backgroundColor: 'orange', color: 'white' }}>Action</th>
    </tr>
  </thead>
  <tbody>
    {vendors.map((vendor, index) => (
      <tr
        key={index}
        style={{
          backgroundColor: index % 2 === 0 ? '#faf4f0' : '#f5d3ba',
          height: '65px',
        }}
      >
        <td>{vendor.fullName}</td>
        <td>{vendor.phoneNumber}</td>
        <td>{vendor.dateOfVisit}</td>
        <td>{vendor.entryTime}</td>
        <td>{vendor.company}</td>
        <td>{vendor.purposeOfVisit}</td>
        <td>{vendor.idNumber}</td>
        <td>{vendor.exitTime}</td>
        <td style={{ textAlign: 'center', verticalAlign: 'middle' }}> {/* Center the icon */}
          <FaEye
            style={{ cursor: 'pointer', color: showDetails === index ? '#FF8C00' : 'gray' }}
            onClick={() => handleToggleDetails(index)}
          />
          {showDetails === index && (
            <span style={{ color: '#FF8C00' }}></span>
          )}
          {showDetails !== index && (
            <span style={{ color: '#999' }}></span>
          )}
        </td>
      </tr>
    ))}
  </tbody>
</Table>


                </div>
              )}
              {content === '' && (
                <div>Main Content Section</div>
              )}
              {/* Handle other content sections as needed */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResponsiveLayout;
