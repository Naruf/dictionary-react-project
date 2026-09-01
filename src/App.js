import logo from "./naruf-dev_logo_horizontal_trimmed.svg";
import "./App.css";
import Footer from "./Footer";
import DictionaryApp from "./DictionaryApp";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="title ">Dictionary App</h1>
        </header>
        <main>
          <DictionaryApp defaultWord="summer" />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
