import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Card from "@/components/portfolio/Card";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col port">
        <div className="portfolio-page">
          <div className=" flex flex-row">
            <div className="portfolio-left">
              <div className="team-title portfolio-page-title">Portfolio</div>
              <div className="portfolio-left-section">
                <div className="portfolio-title">OH ECOSYTEMS LTD (“ECO”)</div>
                <div className="portfolio-text">
                  An integrated processor as a service (“Paas”) platform that
                  connects small cocoa farmers directly to the world’s chocolate
                  manufacturers
                </div>
              </div>
              <div className="portfolio-left-section">
                <div className="portfolio-subtitle">COASTAL GROVES (“CG”)</div>
                <div className="portfolio-text">
                  An organic orange juice processor in Ghana, with a factory
                  capacity of producing 5000 tons of non-concentrate orange
                  juice annually
                </div>
              </div>
              <div className="portfolio-left-section">
                <div className="portfolio-subtitle">
                  NUTS FOR GROWTH (“N4G”)
                </div>
                <div className="portfolio-text">A shea processor in Ghana</div>
              </div>
            </div>
          </div>
          <div className="portfolio-section-images">
            <div className="team-title portfolio-page-title">Portfolio</div>
            <div className="flex flex-row justify-between portfolio-section-images-body ">
              <div className="flex flex-col items-center">
                <Image
                  src={"/static/images/lorem-image.png"}
                  alt={"-" + "icon-approach"}
                  width={310}
                  height={328}
                />
                <div className="portfolio-image-text">Nuts for Growth</div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={"/static/images/ecosystem-image.png"}
                  alt={"-" + "icon-approach"}
                  width={310}
                  height={328}
                />
                <div className="portfolio-image-text">OH Ecosystem</div>
              </div>{" "}
              <div className="flex flex-col items-center">
                <Image
                  src={"/static/images/lorem-image.png"}
                  alt={"-" + "icon-approach"}
                  width={310}
                  height={328}
                />
                <div className="portfolio-image-text">Coastal Groves(“CG”)</div>
              </div>
            </div>
          </div>
        </div>
        <div className="action-section text-white">
          <div className="action-title">We want to hear from you </div>
          <div className="action-main flex flex-row">
            <Image
              src={"/static/images/woman-working.png"}
              alt="woman-working"
              width={668}
              height={421}
              className="action-image"
            />
            {/* <BottomSlider> */}
            <Card />
            {/* <Card />
            </BottomSlider> */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
