import './App.css';
import Sidebar from './components/Sidebar';

const secret = process.env.REACT_APP_MYSECRETKEY;
console.log(secret);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="dashboard">



        </div>.

        <Sidebar />

      </header>
    </div>
  );
}

export default App;
