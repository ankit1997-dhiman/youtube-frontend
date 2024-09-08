import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Navigation } from "./components/Navigation.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import ToastNotification from "./common/ToastNotification.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </BrowserRouter>
      <ToastNotification />
    </>
  );
}

export default App;
