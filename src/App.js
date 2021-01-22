import './App.css';
import FishTank from './components/FishTank/FishTank';
import { fish } from './constants';

function App() {
  return (
    <div className='App'>
      <FishTank fish={fish} />
    </div>
  );
}

export default App;
