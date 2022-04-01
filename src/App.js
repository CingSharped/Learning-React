import logo from './logo.svg';
import './App.css';
import Timer from './Timer';
import Exercise from './Exercise';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Exercise />
        <Timer />
      </header>
    </div>
  );
}

export default App;
