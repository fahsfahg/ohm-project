import { Height } from "@mui/icons-material";
import TextField from "@mui/material/TextField";

const Docker = () => {
  return (
    <div className="Title">
      <h1>Upload Image File</h1>

    <div className="row" style={{ marginTop: 20 }}>
        <div className="col">
            <div style={{width: 400, marginTop: 20}}>
                <h6>Name</h6>
                <input type="text" class="form-control" id="autoSizingInput" placeholder="Docker Container Name"/>
            </div>

            <div class="card" style={{ width: 500, marginTop: 20 }}>
                <div style={{ margin: 15 }}>
                    <h6>Upload File</h6>
                    <input class="form-control" type="file" id="formFile"/>
                </div>
            </div>
        </div>

        <div className="col">
            <div className="row" style={{ width: 500, marginTop: 75 }}>
            <h6>Port</h6>
            <div className="col">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Host</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
            </div>
            <div className="col">
                <div class="input-group flex-nowrap">
                    <span class="input-group-text" id="addon-wrapping">Container</span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
                </div>
                <button type="button" class="btn btn-secondary" style={{ marginTop: 20, marginLeft: 33 }}>Deploy the container</button>
            </div>
            </div>
        </div>
    </div>
      
    </div>
  );
};

export default Docker;
