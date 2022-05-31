import { BrowserRouter } from "react-router-dom";
import Category from "./components/Category";
import Pages from "./pages/Pages";

//BrowserRouter permite que se utilize o routing, basicamente ele olha para as rotas e define como e quando deve renderizar os componentes
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
