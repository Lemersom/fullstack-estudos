import './App.css';

import HiddenShow from './components/HiddenShow';
import InputChars from './components/InputChars';

function App() {
  return (
    <div className="App">
      <div className='customDiv'>
        <HiddenShow />
      </div>
      
      <div>
        <InputChars />
      </div>
    </div>
  );
}

export default App;
