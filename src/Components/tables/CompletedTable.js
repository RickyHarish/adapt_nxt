import React, { useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faFileImport, faPlane, faPrint, faSort, faSync } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


const  CompletedTable=()=>{
  // State management for each column
  const [orderNoSortOrder, setOrderNoSortOrder] = useState('asc');
  const [orderDateSortOrder, setOrderDateSortOrder] = useState('asc');
  const [citySortOrder, setCitySortOrder] = useState('asc');
  const [customerNameSortOrder, setCustomerNameSortOrder] = useState('asc');
  const [orderValueSortOrder, setOrderValueSortOrder] = useState('asc');
  const [statusSortOrder, setStatusSortOrder] = useState('asc');
  const [channelOrder, setChannelOrder] = useState('asc')

  // Sample data
  const rows = [
    { id: 1, icon:"+", checkbox:<input type='checkbox'/>, shoppingIcon:<div>
    <FontAwesomeIcon icon={faShoppingBag} style={{ color: 'green' }} />
  </div>, orderNo: '123', orderDate: '2022-03-01', city: 'New York', customerName: 'Abhisek Dixit', orderValue: 100, status: <Button variant="outline-success" style={{ color: '#3EAE4A',borderRadius: '0', borderColor: '#3EAE4A', background: 'transparent', padding: '0.15rem 0.15rem', fontSize: '0.8rem' }}>Completed</Button> },
    { id: 3, icon:"+", checkbox:<input type='checkbox'/>,shoppingIcon:<div>
    <FontAwesomeIcon icon={faShoppingBag} style={{ color: 'green' }} />
  </div>, orderNo: '456', orderDate: '2022-03-02', city: 'Los Angeles', customerName: 'Abhisek Dixit', orderValue: 200, status: <Button variant="outline-success" style={{ color: '#3EAE4A',borderRadius: '0', borderColor: '#3EAE4A', background: 'transparent', padding: '0.15rem 0.15rem', fontSize: '0.8rem' }}>Completed</Button> },
  { id: 4, icon:"+", checkbox:<input type='checkbox'/>,shoppingIcon:<div>
  <FontAwesomeIcon icon={faShoppingBag} style={{ color: 'green' }} />
</div>, orderNo: '456', orderDate: '2022-03-02', city: 'Los Angeles', customerName: 'Abhisek Dixit', orderValue: 200, status: <Button variant="outline-success" style={{ color: '#3EAE4A',borderRadius: '0', borderColor: '#3EAE4A', background: 'transparent', padding: '0.15rem 0.15rem', fontSize: '0.8rem' }}>Completed</Button>  },
{ id: 5, icon:"+", checkbox:<input type='checkbox'/>,shoppingIcon:<div>
<FontAwesomeIcon icon={faShoppingBag} style={{ color: 'green' }} />
</div>, orderNo: '456', orderDate: '2022-03-02', city: 'Los Angeles', customerName: 'Abhisek Dixit', orderValue: 200, status: <Button variant="outline-success" style={{ color: '#3EAE4A',borderRadius: '0', borderColor: '#3EAE4A', background: 'transparent', padding: '0.15rem 0.15rem', fontSize: '0.8rem' }}>Completed</Button> },
{ id: 6, icon:"+", checkbox:<input type='checkbox'/>,shoppingIcon:<div>
<FontAwesomeIcon icon={faShoppingBag} style={{ color: 'green' }} />
</div>, orderNo: '456', orderDate: '2022-03-02', city: 'Los Angeles', customerName: 'Abhisek Dixit', orderValue: 200, status: <Button variant="outline-success" style={{ color: '#3EAE4A', borderRadius: '0', borderColor: '#3EAE4A', background: 'transparent', padding: '0.15rem 0.15rem', fontSize: '0.8rem'}}>Completed</Button> },
  ];

  // Function to handle sorting order change for each column
  const handleSortChange = (column) => {
    switch (column) {
      case 'orderNo':
        setOrderNoSortOrder(orderNoSortOrder === 'asc' ? 'desc' : 'asc');
        break;
      case 'orderDate':
        setOrderDateSortOrder(orderDateSortOrder === 'asc' ? 'desc' : 'asc');
        break;
        case 'orderChannel':
          setChannelOrder(channelOrder === 'asc' ? 'desc' : 'asc');
          break;  
      case 'city':
        setCitySortOrder(citySortOrder === 'asc' ? 'desc' : 'asc');
        break;
      case 'customerName':
        setCustomerNameSortOrder(customerNameSortOrder === 'asc' ? 'desc' : 'asc');
        break;
      case 'orderValue':
        setOrderValueSortOrder(orderValueSortOrder === 'asc' ? 'desc' : 'asc');
        break;
      case 'status':
        setStatusSortOrder(statusSortOrder === 'asc' ? 'desc' : 'asc');
        break;
      default:
        break;
    }
  };

  // Render table rows
  const renderRows = () => {
    return rows.map(row => (
      <tr key={row.id}>
        <td className="table-cell">{row.icon}</td>
        <td className="table-cell">{row.checkbox}</td>
        <td className="table-cell">{row.shoppingIcon}</td>
        <td className="table-cell">{row.orderNo}</td>
        <td className="table-cell">{row.orderDate}</td>
        <td className="table-cell">{row.city}</td>
        <td className="table-cell">{row.customerName}</td>
        <td className="table-cell">{row.orderValue}</td>
        <td className="table-cell">{row.status}</td>
        <td className="table-cell">Operation</td>
      </tr>
    ));
  };

  return (
    <Container >
      <Row className='mb-2 mt-2'>
        <Col>
        <Row className="justify-content-start">
          <Col>
        <label htmlFor="file-upload" className="custom-file-upload">
                <FontAwesomeIcon icon={faFileImport} className="import-icon" />
                Import Orders
        </label>
        <input id="file-upload" type="file"  style={{ display: 'none' }}  />
        </Col>
        <Col>
        <button className='accept-btn'>
        <FontAwesomeIcon icon={faPlane} className="mr-2" />
        Accept
        </button>
        </Col>
        <Col>
        <button className='accept-btn'>
      <FontAwesomeIcon icon={faPrint} className="mr-2" />
      Print
      <FontAwesomeIcon icon={faAngleDown} className="ml-2" />
    </button>
    </Col>
    </Row>
        </Col>
        <Col className="d-flex justify-content-end">
        <button className='refresh-btn'>
          <FontAwesomeIcon icon={faSync} className="mr-2" />
            Refresh
          </button>
        </Col>
      </Row>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>{' '}</th>
          <th className="table-cell"><input type='checkbox'/></th>
          <th onClick={() => handleSortChange('orderChannel')} className="table-cell">
            Channel 
            {orderNoSortOrder === 'asc' ? 
              <FontAwesomeIcon icon={faSort} className="custom-icon" /> : 
              <FontAwesomeIcon icon={faSort} className="custom-icon" />
            }
          </th>
          <th onClick={() => handleSortChange('orderNo')} className="table-cell">
            Order No 
            {orderNoSortOrder === 'asc' ? 
              <FontAwesomeIcon icon={faSort} className="custom-icon" /> : 
              <FontAwesomeIcon icon={faSort} className="custom-icon" />
            }
          </th>
          <th onClick={() => handleSortChange('orderDate')} className="table-cell">
            Order Date 
            {orderDateSortOrder === 'asc' ? 
              <FontAwesomeIcon icon={faSort} className="custom-icon" /> : 
              <FontAwesomeIcon icon={faSort} className="custom-icon" />}
          </th>
          <th onClick={() => handleSortChange('city')} className="table-cell">
            City 
            {citySortOrder === 'asc' ? 
              <FontAwesomeIcon icon={faSort} className="custom-icon" /> : 
              <FontAwesomeIcon icon={faSort} className="custom-icon" />}
          </th>
          <th onClick={() => handleSortChange('customerName')} className="table-cell">
            Customer Name 
            {customerNameSortOrder === 'asc' ? 
              <FontAwesomeIcon icon={faSort} className="custom-icon" /> : 
              <FontAwesomeIcon icon={faSort} className="custom-icon" />}
          </th>
          <th onClick={() => handleSortChange('orderValue')} className="table-cell">
            Order Value 
            {orderValueSortOrder === 'asc' ? 
              <FontAwesomeIcon icon={faSort} className="custom-icon" /> : 
              <FontAwesomeIcon icon={faSort} className="custom-icon" />}
          </th>
          <th onClick={() => handleSortChange('status')} className="table-cell">
            Status 
            {statusSortOrder === 'asc' ? 
              <FontAwesomeIcon icon={faSort} className="custom-icon" /> : 
              <FontAwesomeIcon icon={faSort} className="custom-icon" />}
          </th>
          <th className="table-cell">Operation</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </Table>
    </Container>
  );
}

export default CompletedTable;
