import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SearchCars from "./Pages/SearchCars";
import CarDetail from "./Pages/DetailCar";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/search-cars" component={SearchCars} />
        <Route exact path="/search-cars/detail/:id" component={CarDetail} />
      </Switch>
    </Router>
  );
}

export default App;
