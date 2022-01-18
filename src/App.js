import './App.css';
import FileUpload from './components/fileupload';


function App() {
  return (
    <div className="App">
      <div className='main'>
        <h1 className='heading'>Quick Share</h1>
      <p>A simple webapp to share files upto 100mb with a single link</p>
      </div>
      <FileUpload/>
    </div>
  );
}

export default App;
