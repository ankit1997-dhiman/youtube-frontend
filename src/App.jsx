import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  );
}

export default App;
