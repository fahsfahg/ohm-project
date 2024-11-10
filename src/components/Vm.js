import Button from '@mui/material/Button';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid'


const rows = [
    {
      id: 1,
      name: 'Phodchara',
      cpu: 1,
      ram: 32,
      hdd: 256,
      port: 8000
    },
    {
        id: 2,
        name: 'TimeTime',
        cpu: 2,
        ram: 64,
        hdd: 512,
        port: 3000
      },
  ];

const Vm = () => {
    return(
        <div className='Title'>
            <h1>Manage VM</h1>
            

        <div className='row'>
            <div class="col" style={{ marginTop: 20 }}>
                <h6>CPU</h6>
                <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                <select class="form-select" id="autoSizingSelect">
                <option selected>Choose...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                </select>

                <h6 style={{ marginTop: 10 }}>RAM</h6>
                <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                <select class="form-select" id="autoSizingSelect">
                <option selected>Choose...</option>
                <option value="1">16 gb</option>
                <option value="2">32 gb</option>
                <option value="3">64 gb</option>
                </select>
            </div>
            <div class="col" style={{ marginTop: 20}}>
                <h6 >Port</h6>
                <input type="text" class="form-control" id="autoSizingInput" placeholder="localhost: 8000"/>

                <h6 style={{ marginTop: 10 }}>HDD</h6>
                <label class="visually-hidden" for="autoSizingSelect">Preference</label>
                <select class="form-select" id="autoSizingSelect">
                <option selected>Choose...</option>
                <option value="1">256</option>
                <option value="2">512</option>
                <option value="3">1TB</option>
                </select>
            </div>

        </div>
        <Button variant="contained" color="success" style={{ marginTop: 50 }}>Create VM</Button>
        <Button variant="contained" color="error" style={{ marginLeft: 20, marginTop: 50 }}>Delete VM</Button>
            <div style={{ height: 300, width: '100%', marginTop: 20 }}>
            <DataGrid className='grid-vm'
                columns={[
                    { field: 'name', headerName: 'Name', width: 400 },
                    { field: 'cpu', headerName: 'CPU', width: 150 },
                    { field: 'ram', headerName: 'RAM', width: 150 },
                    { field: 'hdd', headerName: 'HDD', width: 150 },
                    { field: 'port', headerName: 'Port', width: 150 },
                ]}
                rows={rows}/>
            </div>
            
        </div>
        
    );
}
export default Vm;
