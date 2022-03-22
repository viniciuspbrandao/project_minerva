import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Sobre from "./components/pages/Sobre";
import Contato from "./components/pages/Contato";
import Cadastro from "./components/pages/Cadastro";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container customClass="min_height">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Sobre">
            <Sobre />
          </Route>
          <Route exact path="/Contato">
            <Contato />
          </Route>
          <Route exact path="/Cadastro">
            <Cadastro />
          </Route>
        </Container>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
