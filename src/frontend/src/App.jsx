import "./App.css";
import DarkModeToggle from "./components/DarkModeToggle";
import Summarizer from "./components/Summarizer";

function App() {
  return (
    <div className="App">
      <DarkModeToggle />
      <Summarizer />
    </div>
  );
}

export default App;
