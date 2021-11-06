import { useState } from "react";
import "./App.scss";
import MainPage from "./pages/MainPage";
import Alert from "./components/complex/alert/Alert";
function App() {
  const [alert,setAlert]=useState(false);
  return (
    <div className="App">
      {alert ? <Alert alert={alert} setAlert={setAlert}/> : null}
      
      <MainPage alert={alert} setAlert={setAlert} />
    </div>
  );
}

export default App;
