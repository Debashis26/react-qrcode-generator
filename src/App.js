import './App.css';
// import Qrpage from './component/Qrpage';
import QRCode from 'react-qr-code';
import Qrpage from './component/Qrpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Qrpage/>
      </header>
    </div>
  );
}

export default App;
