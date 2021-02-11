import "./App.css";
import Nav from "./components/Nav";
import Front from "./components/Front";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Values from "./components/Values";
function App() {
  return (
    <div className="App">
      <Nav />
      <Front />
      <Cards />
      <Values />
      <Footer />
    </div>
  );
}

export default App;
