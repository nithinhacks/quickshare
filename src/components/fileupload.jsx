import React, { useState } from "react";

function FileUpload() {

    const [file, setFile] = useState("");
    const [result, setResult] = useState({});

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
        .catch(error => console.log('error', error));
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="forminputs">
          <label htmlFor="file">File :</label>
          <input type="file" id="file" name="file" onChange={handleUpload} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>{result.link}</p>
    </div>
  );

}


export default FileUpload;

