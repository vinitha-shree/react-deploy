import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <LandingPage />
    </div>
  );
}

export default App;
