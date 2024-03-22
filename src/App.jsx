import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CarDetail from "./Pages/DetailCar";
import LandingPage from "./Pages/LandingPage";
import SearchCars from "./Pages/SearchCars";
import SignIn from "./Pages/SignIn";
import PaymentCars from "./Pages/PaymentCars";
import SignUp from "./Pages/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "search-cars",
      element: <SearchCars />,
    },
    {
      path: "search-cars/detail/:id",
      element: <CarDetail />,
    },
    {
      path: "sign-in",
      element: <SignIn />,
    },
    {
      path: "payment-cars/:id",
      element: <PaymentCars />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
