import './App.css';
import {List, PaypalButtons, CheckOut} from './Components/Payments';

function App() {
  return (
    <div className="App">
      <div id="paypal-button-container"></div>

      <CheckOut />
      {/* <PaypalButtons /> */}
      {/* <List /> */}
    </div>
  );
}

export default App;
