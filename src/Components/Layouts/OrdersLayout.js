import PendingTableHeader from '../Headers/PendingTableHeader'
// import Dashboard from '../DashBoard/Dashboard';
import React, { useState } from 'react';
import PendingTable from '../tables/PendingTable';
import AcceptedTable from '../tables/AcceptedTable';
import AWBCreatedTable from '../tables/AWBCreatedTable';
import ReadyToShipTable from '../tables/ReadyToShipTable';
import ShippedTable from '../tables/ShippedTable';
import CompletedTable from '../tables/CompletedTable';
import CancelledTable from '../tables/CancelledTable';
// import MainHeader from '../MainHeader/MainHeader';

const OrdersLayout = ()=> {
  const [selectedTable, setSelectedTable] = useState("Pending");

  const handleHeaderClick = (tableName) => {
    setSelectedTable(tableName);
  };

  return (
        <div  style={{paddingTop:"80px", width:'100%', backgroundColor:'rgb(244, 207, 213)', height:'100vh'}}>
          <PendingTableHeader handleHeaderClick={handleHeaderClick} />
          {selectedTable === 'Pending' && <PendingTable />}
          {selectedTable === 'Accepted' && <AcceptedTable />}
          {selectedTable === 'AWBCreated' && <AWBCreatedTable />}
          {selectedTable === 'ReadyToShip' && <ReadyToShipTable />}
          {selectedTable === 'Shipped' && <ShippedTable />}
          {selectedTable === 'Completed' && <CompletedTable />}
          {selectedTable === 'Cancelled' && <CancelledTable />}
        </div>
  );
}

export default OrdersLayout;
