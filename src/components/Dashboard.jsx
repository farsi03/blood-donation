import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
const Dashboard = () => {
    const donors = [
    { id: 1, name: "Ameen", blood: "A+", phone: "9876543210", location: "Kochi" },
    { id: 2, name: "Rahul", blood: "B+", phone: "9123456780", location: "Calicut" },
    { id: 3, name: "Alfiya", blood: "O-", phone: "7890123456", location: "Kannur" }];
  return (
    <div>
        <h1 style={{color:"red"}} >Donors List</h1>
            <TableContainer/>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Blood</TableCell>
                          <TableCell>Phone</TableCell>
                        <TableCell>Location</TableCell>
                      </TableRow>
              </TableHead>
              <TableBody>
                  {donors.map((val)=>{
                      return(
                  <TableRow>
                              <TableCell>{val.name}</TableCell>
                              <TableCell>{val.blood}</TableCell>
                              <TableCell>{val.phone}</TableCell>
                              <TableCell>{val.location}</TableCell>
                  </TableRow>
                  )
                })}
              </TableBody>
              </Table>
                
        
    </div>
  )
}

export default Dashboard