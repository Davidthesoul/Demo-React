import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'; // importo bootstrap a mi app
import 'bootstrap/dist/css/bootstrap.min.css'; //traigo el ccs de los estilos de bootstrap

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://react-bootstrap.github.io/components/buttons/"
          target="_blank"
          rel="noopener noreferrer"
          >

          Botones de React Bootstrap
        </a>
        <div>
        <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
