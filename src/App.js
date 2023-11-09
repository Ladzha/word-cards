import './App.css';
import CardWrapper from './CardWrapper'
import CardForm from './CardForm'

function App() {
  return (
    <div className="App">
      <div className='card-container-grid'>
        <CardForm/>
        <CardWrapper/>
      </div>
    </div>
  );
}

export default App;
