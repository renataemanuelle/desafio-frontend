import Filter from "../sections/Filter";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Results from "../sections/Results";

function Wallets() {
  return (
    <div>
      <Header />
      <p>Wallets Page</p>
      <Filter />
      <Results />
      <Footer />
    </div>
  );
}

export default Wallets;
