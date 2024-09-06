import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
