// Importing React and necessary Material-UI components
import React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css";
import Dashboard from '../../Pages/Dashboard';







// Function to set style based on status
const makeStyle=(status)=>{
  if(status === 'Approved')
  {
     return{
      background: 'rgb(145 254 159 / 47%)',
      color: 'green'
     }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

// React component for displaying a basic table with the rows of data
export default function BasicTable() {  
  
  

  
  

  
  const[description, SetDescription]=useState('')
  const[service_name, SetService_name]=useState('')
  const[price, SetPrice]=useState('')
  const[pickup_date, SetPickup_date]=useState('')
  const[delivery_date, SetDelivery_date]=useState('')
  const[status, SetStatus]=useState('')
  const[order_statuses, SetOrder_statuses]=useState([])

  useEffect(()=>{
    fetch("http://localhost:8081/order_status/getAll")
    .then(res=>res.json())
    .then((result)=>{ 
    SetOrder_statuses(result);
  }
  )
},[])

  return (
    
     // Styling the container for the table
    <div className="Table"> 
    
          
        <h2>Order Status</h2>
   
    <TableContainer component={Paper}
    style={{boxShadow: '0px 13px 20px 0px #80808029'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ord.Id</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Service Name</TableCell>
            <TableCell align="left">Price (Rs.)</TableCell>
            <TableCell align="left">Pickup Date</TableCell>
            <TableCell align="left">Delivery Date</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {order_statuses.map(order_status=>(                 //loop through the 'rows' array and render each object as a table row
            <TableRow
              key={order_status.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order_status.id}
              </TableCell>
              <TableCell align="left">{order_status.description}</TableCell>
              <TableCell align="left">{order_status.service_name}</TableCell>
              <TableCell align="left">{order_status.price}</TableCell>
              <TableCell align="left">{order_status.pickup_date}</TableCell>
              <TableCell align="left">{order_status.deliver_date}</TableCell>
              <TableCell align="left">
              <span className="status" style={makeStyle(order_status.status)}> {order_status.status}</span>
                
                  
                
                {/*styles based on the status of the order*/}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   
    
    </div>

  

  );
  
  
  
}
