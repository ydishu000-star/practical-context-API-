import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <h1>Shopping Cart</h1>
      <Products />
      <Cart />
    </CartProvider>
  );
}

export default App;
