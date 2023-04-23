import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import './components/Navbar.css';

function App() {
  return (
    <>
        <Navbar title="wordSwitcher" about="about"/>
        <Form />
    </>
  );
}

export default App;
