



import { AppContextProvider } from "./main/context";

import Header from "./components/Header";
import ShopCollection from "./components/ShopCollection";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <ShopCollection />
    </AppContextProvider>
  );
}

export default App;
