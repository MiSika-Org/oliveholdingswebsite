import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Image from "next/image";
import Card from "@/components/portfolio/Card";
import RotatingGear from "@/components/RotatingGear";
import GearCard from "@/components/portfolio/GearCard";
import PortofolioCard from "@/components/portfolio/PortofolioCard";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = ({}) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col port">
        <div className="portfolio-page">
          <div className="flex flex-row portfolio-main">
            <div className="portfolio-left">
              <div className="team-title portfolio-page-title">Portfolio</div>
              <div className="portfolio-left-section flex flex-col gap-10">
                {/* <div className="flex flex-row justify-between portfolio-section-images-body flex-col "> */}
                <PortofolioCard
                  text="Shea and soya processor in Northern Ghana with the second largest Shea and soya crushing factory in the world and a supply network of over 70000 women"
                  title="Nuts for Growth"
                  image="/static/images/n4g.png"
                  imgHeight={150}
                  imgWidth={150}
                />
                <PortofolioCard
                  text="An integrated processor as a service (“Paas”) platform that connects small cocoa farmers directly to the world’s chocolate manufacturers"
                  title="OH Ecosystem"
                  image="/static/images/world.png"
                  imgHeight={100}
                  imgWidth={100}
                />
                <PortofolioCard
                  text="An organic orange juice processor in Ghana, with a factory capacity of producing 5000 tons of non-concentrate orange juice annually"
                  title="Coastal Groves(“CG”)"
                  image="/static/images/cgl.png"
                  imgHeight={150}
                  imgWidth={150}
                />
                {/* </div> */}
              </div>
              {/* <div className="portfolio-left-section">
                <div className="portfolio-subtitle">COASTAL GROVES (“CG”)</div>
                <div className="portfolio-text">
                  An organic orange juice processor in Ghana, with a factory
                  capacity of producing 5000 tons of non-concentrate orange
                  juice annually
                </div>
              </div> */}
              {/* <div className="portfolio-left-section">
                <div className="portfolio-subtitle">
                  NUTS FOR GROWTH (“N4G”)
                </div>
                <div className="portfolio-text">A shea processor in Ghana</div>
              </div> */}
            </div>
            <div className="portfolio-right">
              <RotatingGear className="gear-portfolio gear-portfolio-1" />
              <RotatingGear className="gear-portfolio gear-portfolio-2" />
              <RotatingGear className="gear-portfolio gear-portfolio-3" />
              <GearCard
                title="$10M+"
                className="portfolio-right-card-1"
                body="Total ARR generated by portfolio companies"
              />
              <GearCard
                title="$5M+"
                className="portfolio-right-card-2"
                body="Direct income to local farmers"
              />
              <GearCard
                title="70k+"
                className="portfolio-right-card-3"
                body="Female suppliers in our network"
              />
              <GearCard
                title="3"
                className="portfolio-right-card-4"
                body="Portfolio companies the cocoa, shea and citrus sectors"
              />
              <GearCard
                title="4"
                className="portfolio-right-card-5"
                body="Factories owned by portfolio companies in Ghana, Nigeria & Germany"
              />
            </div>
          </div>
          {/* <div className="portfolio-section-images">
            <div className="team-title portfolio-page-title">Portfolio</div>
            <div className="flex flex-row justify-between portfolio-section-images-body ">
              <PortofolioCard
                text="A shea processor in Ghana"
                title="Nuts for Growth"
                image="/static/images/n4g.png"
                imgHeight={285}
                imgWidth={285}
              />
              <PortofolioCard
                text="An integrated processor as a service (“Paas”) platform that connects small cocoa farmers directly to the world’s chocolate manufacturers"
                title="OH Ecosystem"
                image="/static/images/world.png"
                imgHeight={200}
                imgWidth={200}
              />
              <PortofolioCard
                text="An organic orange juice processor in Ghana, with a factory capacity of producing 5000 tons of non-concentrate orange juice annually"
                title="Coastal Groves(“CG”)"
                image="/static/images/cgl.png"
                imgHeight={285}
                imgWidth={285}
              />
            </div>
          </div> */}
        </div>
        <div className="action-section text-white">
          <div className="action-title">We want to hear from you </div>
          <div className="action-main flex flex-row">
            <div className="relative action-bottom-image ">
              <Image
                src={"/static/images/colleagues.jpg"}
                alt="woman-working"
                fill
              />
            </div>
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
