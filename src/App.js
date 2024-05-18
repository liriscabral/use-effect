import './App.css';
import Contador from './Components/Contador/Contador';
import SelectCidadeIBGE from './Components/SelectCidadeIBGE/SelectCidadeIBGE';
import SelectEstadoIBGE from './Components/SelectEstadoIBGE/SelectEstadoIBGE';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />

        <h3>Componentes Individuais</h3>
        <div className="Selects">
          <SelectEstadoIBGE />
          <SelectCidadeIBGE uf="sc" />
        </div>

        <h3>Componentes Dependentes</h3>
        <div className="Selects">

        </div>
      </header>
    </div>
  );
}

export default App;
