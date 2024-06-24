import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./Components/ButtonComponent";
import ImageComponent from "./Components/ImageComponent";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learnnnnnnnnnnnnnnnnnnnnnn React
        </a>
      </header>

      <ButtonComponent text="Click me" />
      <ImageComponent src={logo} className="App-logo" alt="img logo react"/>
    </div>
  );
}

export default App;
