import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./styles/index.css";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
