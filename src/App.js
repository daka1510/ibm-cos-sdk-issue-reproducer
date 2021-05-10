import './App.css';

import IBMS3 from 'ibm-cos-sdk/clients/s3'
import logo from './logo.svg';

const handleClick = () => {
  const s3Params = {
    tokenManager: {
      getToken: function () {
        return { accessToken: "my-token" };
      }
    }
  };
  const client = new IBMS3(s3Params);

  const uploadOptions = {
    Bucket: "my-bucket",
    Key: "my-key",
    Body: "my-body"
  };

  client.upload(uploadOptions, (err, result) => {
    if (err) {
      console.log("Upload failed.", err);
      return;
    }
    console.log("Upload succeeded.", result)
  });
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleClick}>Trigger S3 SDK</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
