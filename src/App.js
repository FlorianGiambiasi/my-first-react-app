import logo from './logo.svg';
import './App.css';
import Member from './components/Member'

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Member name='Flo'/>
      <Member name='Samah'/>
      <Member name='Lol'/>
      <Member name='Lil'/>
    </div>
  );
}

export default App;
