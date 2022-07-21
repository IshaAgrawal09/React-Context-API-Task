import { createContext} from "react";

const Context = createContext();

function myProvider({children}) {
    return(
        <Context.Provider value={{userName: "userName"}}>
            {children}
        </Context.Provider>
    )
}
export default myProvider;
export {Context}