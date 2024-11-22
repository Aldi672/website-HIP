import { useState } from "react";
import Herro from "../components/Herro";

import Navbar from "../components/Navbar";
import Tenka from "../components/Tenka";
import Type from "../components/Type";

import Footer4 from "../components/pagefooter/Footer3";


import Frame from "../components/companyvalue";
import Page1 from "../components/our";
import Contact from "../components/contactus";
import Company from "../components/Company";
import Fortofolio from "../components/Fortofolio";
import Faq from "../components/faq";
import BARA from "../components/desk";
import Artikel from "../components/artikel";

import Fortofolio2 from "../components/Fortofolio2";
import PageClient from "../components/PageClient";
import Sertif from "../components/Sertif";

const Home = () => {
  const [selectedType, setSelectedType] = useState(1);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  const renderContent = () => {
    switch (selectedType) {
      case 1:
        return <Page1 />;


      case 3:
        return <Artikel />;



    }
  };

  const renderConskas = () => {

  };

  const renderFooter = () => {
    switch (selectedType) {

      default:
        return <Footer4 />;
    }
  }

  return (
    <div className="overflow-hidden transition-all duration-200 scroll-smooth" >
      <Navbar />
      <Herro />
      <Tenka />
      <Frame />
      <Company />


      <Type onTypeClick={handleTypeClick} />
      {renderContent()}
      {renderConskas()}
      <PageClient />
      <Sertif />
      <Fortofolio />
      <Fortofolio2 />
      <BARA />
      <Faq />
      <Contact />

      {renderFooter()}

    </div>
  );
};

export default Home;
