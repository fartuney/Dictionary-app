import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            <a
              href="https://github.com/fartuney/Dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            Coded by Fartuney
          </small>
        </footer>
      </div>
    </div>
  );
}
