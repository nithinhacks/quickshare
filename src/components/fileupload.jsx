import React, { useState } from "react";
import './fileupload.css';
import { FaUpload } from 'react-icons/fa';

function FileUpload() {

    const [file, setFile] = useState("");
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    var formdata = new FormData();
    formdata.append("file", file);

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };

    const handleUpload = (event) => {
      setFile(event.target.files[0]);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      fetch("https://file.io", requestOptions)
        .then(response => response.json())
        .then(result => setResult(result))
        .then(() => setLoading(false))
        .catch(error => console.log('error', error));
    }


  return (
    <div className="fileupload">
      <form onSubmit={handleSubmit} className="forminputs">
        <div >
          <label className="custom-file-upload" htmlFor="file"><FaUpload/> Upload file</label>
          <input type="file" id="file" name="file" onChange={handleUpload} />
        </div>
        <div className="displayname">
          <p className="filename">{file.name}</p>
          <button className="subbutton" onClick={file==="" ? () => {setLoading(false)} : () => {setLoading(true)}} type="submit">Submit</button>
        </div>
      </form>
      {loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> : <p className="filename">{result.link}</p>}
    </div>
  );

}


export default FileUpload;

