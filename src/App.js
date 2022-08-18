import { CartProvider } from "./Context";
import "./App.css";
import Currency from "./Currency";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Currency />
      </CartProvider>
    </div>
  );
}

export default App;
