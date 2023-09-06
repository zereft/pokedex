
import { useSelector, useDispatch } from "react-redux";

import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  
  const login = useSelector(state => state.config.trainerID);

  return (
    <div className="app">
      {login
      ? <Welcome />
      : <Login />
      }
    </div>
  );
}

export default App;