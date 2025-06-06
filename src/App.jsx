import React from "react";

// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import { About, Banner, Community, Faq, Footer, Header, Join, Pricing, Workouts } from "./components"

const App = () => {
  
  // aos initialization
  Aos.init({
    duration:1200,
  })
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Header />
      <Banner />
      <About />
      <Workouts />
      <Pricing />
      <Community />
      <Faq />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
