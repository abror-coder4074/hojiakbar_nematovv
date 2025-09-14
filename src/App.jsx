import Contact from "./Components/contac/Contact";
import Footer from "./Components/footere/Footer";
import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero";
import Portfolio from "./Components/partfolio/Portfolio";
import Services from "./Components/services/Services";
import Testimonials from "./Components/testimonial/Testimonials";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact/> 
      </main>
      <Footer />
    </>
  );
}

export default App;
