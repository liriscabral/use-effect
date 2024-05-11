import logo from './logo.svg';
import './App.css';
import Contador from './Components/Contador/Contador';
import SelectCidadeIBGE from './Components/SelectCidadeIBGE/SelectCidadeIBGE';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Contador />
        <SelectCidadeIBGE uf="ac"/>
      </header>
    </div>
  );
}

export default App;
