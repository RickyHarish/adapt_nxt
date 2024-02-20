import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faTags, faBox, faShippingFast, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Col, Container,Row, Nav } from 'react-bootstrap';
import {  useState } from 'react';
import DashboardLayout from '../Layouts/DashboardLayout';
import InventoryLayout from '../Layouts/InventoryLayout';
import OrdersLayout from '../Layouts/OrdersLayout';
import ShippingLayout from '../Layouts/ShippingLayout';
import ChannelLayout from '../Layouts/ChannelLayout';
import MainHeader from '../MainHeader/MainHeader';


const DashboardMain = () => {
    const [layOut, setLayout]=useState("Dashboard")
    const [hideDashboard, setHideDashboard] = useState(false)

    const handleDashboardClick =(e)=>{
        console.log(e)
        setLayout(e)
    }

    const handleHide =(value)=>{
        setHideDashboard(value)
        console.log(hideDashboard)
    }


  return (
    <div className='main-container'>
    <MainHeader handleHide={handleHide} />
    <Container className='main-screen' >
        <Row>
    <Col md={2} style={{ transition: 'width 0.5s ease'}}>
        <Nav className="flex-column mt-1"  style={{ backgroundColor: '#f2f2f2', height:'100vh' }}>
        <Nav.Link  className={layOut==="Dashboard"?'active-link': "link" } onClick={()=>handleDashboardClick("Dashboard")}>
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />
            Dashboard
        </Nav.Link>
            <Nav.Link href="#inventory" className={layOut==="Inventory"?'active-link': "link" } onClick={()=>handleDashboardClick("Inventory")}>
            <FontAwesomeIcon icon={faTags} className="mr-2" />
            Inventory
        </Nav.Link>
        <Nav.Link href="#orders" className={layOut==="Orders"?'active-link': "link" } onClick={()=>handleDashboardClick("Orders")}>
            <FontAwesomeIcon icon={faBox} className="mr-2" />
            Orders
        </Nav.Link>
        <Nav.Link href="#shipping" className={layOut==="Shipping"?'active-link': "link" } onClick={()=>handleDashboardClick("Shipping")}>
            <FontAwesomeIcon icon={faShippingFast} className="mr-2" />
            Shipping
        </Nav.Link>
        <Nav.Link href="#channel" className={layOut==="Channel"?'active-link': "link" } onClick={()=>handleDashboardClick("Channel")}>
            <FontAwesomeIcon icon={faShareAlt} className="mr-2" />
            Channel
        </Nav.Link>
        </Nav>
    </Col>
    <Col md={10} className='main-screen'>
        {layOut==="Dashboard" && <DashboardLayout />}
        {layOut==="Inventory" && <InventoryLayout />}
        {layOut==="Orders" && <OrdersLayout />}
        {layOut==="Shipping" && <ShippingLayout />}
        {layOut==="Channel" && <ChannelLayout />}
    </Col>
    </Row>
</Container>
  </div>    
  );
}

export default DashboardMain;
