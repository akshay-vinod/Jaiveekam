import "./App.css";
import Nav from "./components/Nav";
import Front from "./components/Front";
import Cards from "./components/Cards"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
      <Nav />
      <Front />
      <Cards />
      <Footer/>
    </div>
  );
}

export default App;
