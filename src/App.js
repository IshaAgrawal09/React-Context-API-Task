import "./App.css";
import Task1 from "./Task1";
import { createContext} from "react";
const Context = createContext();
function App() {
  return (
    <div>
      <Context.Provider value={"userName"}>
        <Task1 />
      </Context.Provider>
    </div>
  );
}

export default App;
export {Context};
