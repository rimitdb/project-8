import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Store from './components/Store/Store';
import Qa from './QA/Qa';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Store />
      <Qa />
      <Footer />
    </div>
  );
}

export default App;
