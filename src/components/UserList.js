import React from "react";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    username: "pphodchara",
    name: "Ohm Phodchara",
    password: "******",
    role: "Admin",
  },
  {
    id: 2,
    username: "kanezapp",
    name: "Kane Zappp",
    password: "******",
    role: "User",
  },
];

const UserList = () => {
  return (
    <div className="Title">
      <h1>User List</h1>
      <Button variant="contained" color="success" style={{ marginTop: 20 }}>
        Add new User
      </Button>
      <Button variant="contained" color="black" style={{ marginLeft: 20, marginTop: 20 }}>
        Search ...
      </Button>

      <div style={{ height: "70%", width: "100%" }}>
        <DataGrid className='grid-vm'
                columns={[
                    { field: 'username', headerName: 'Username', width: 300 },
                    { field: 'name', headerName: 'Name', width: 400 },
                    { field: 'password', headerName: 'Password', width: 200 },
                    { field: 'role', headerName: 'Role', width: 200 },
                ]}
                rows={rows}/>
        
      </div>
    </div>
  );
};

export default UserList;
