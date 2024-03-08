import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SearchCars from "./Pages/SearchCars";
import CarDetail from "./Pages/DetailCar";
import PaymentCars from "./Pages/PaymentCars";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/search-cars" element={<SearchCars />} />
        <Route exact path="/search-cars/detail/:id" element={<CarDetail />} />
        <Route exact path="/payment-cars/:id" element={<PaymentCars />} />
      </Routes>
    </Router>
  );
}

export default App;
