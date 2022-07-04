import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Card />
    </div>
  );
}

export default App;
