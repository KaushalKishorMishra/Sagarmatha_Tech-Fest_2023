import Navbar from "./components/templates/Navbar";
import "./assets/css/style.css"
// import PageNotFound from "./components/templates/PageNotFound";
import Footer from "./components/templates/Footer"
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
