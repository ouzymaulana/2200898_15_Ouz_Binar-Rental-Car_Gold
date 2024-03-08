import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SearchCars from "./Pages/SearchCars";
import CarDetail from "./Pages/DetailCar";
import SignIn from "./Pages/SignIn";

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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
