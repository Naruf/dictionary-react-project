import logo from "./naruf-dev_logo_horizontal_trimmed.svg";
import "./App.css";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <header className="App-header ">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Footer />
    </div>
  );
}
