import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SearchForm from "../Components/SearchCars/SearchForm";

const SearchCars = () => {
  return (
    <>
      <Header showImage={true} />
      <SearchForm />
      <Footer />
    </>
  );
};

export default SearchCars;
