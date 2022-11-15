import "./App.css";
import NavBar from "./components/NavBar";
import { Fragment } from "react";
import Banner from "./components/Banner";
import Solutions from "./components/Solutions";
import Services from "./components/Services";
import MakeIT from "./components/MakeIT";
import Consultation from "./components/Consultation";
import Relation from "./components/Relation";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <Solutions />
      <Services />
      <MakeIT />
      <Consultation />
      <Relation />
      <Footer />
    </Fragment>
  );
}

export default App;
