import logo from "./naruf-dev_logo_horizontal_trimmed.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="btn-primary">
          This app was coded by{" "}
          <a
            className="App-link f-1"
            href="https://github.com/Naruf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nadia Ruiz
          </a>
          , is open source in{" "}
          <a
            className="App-link"
            href="https://github.com/Naruf/dictionary-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>{" "}
          and hosted in{" "}
          <a
            className="App-link"
            href="https://vercel.com/narufs-projects/dictionary-react-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vercel
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
