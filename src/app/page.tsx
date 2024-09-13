import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ActionCard from "@/components/home/ActionCard";
import Approach from "@/components/home/Approach";
import BottomSlider from "@/components/home/BottomSlider";
import Dash from "@/components/home/Dash";
import HomeSlide from "@/components/home/HomeSlide";
import RotatingGear from "@/components/RotatingGear";
import Image from "next/image";
// import { loadEnvConfig } from "@next/env";

// const projectDir = process.cwd();
// loadEnvConfig(projectDir);

export default function IndexPage() {
  return (
    <div>
      <div className="home-slide">
        <Header fromHome />
        <BottomSlider autoPlay swipeable={false}>
          <HomeSlide />
          <HomeSlide />
        </BottomSlider>
      </div>
      <div className="explore h-screen relative">
        <div className="explore-title">Explore our approach</div>
        {/* ? */}
        <Dash className="dash-1" />

        <Approach
          step={1}
          body="Invest: Provide growth capital investment in high-potential agricultural processors, focused on export"
          position="bottom"
          iconSize={84.5}
          isSvg
          icon="/static/icons/harvest.svg"
        />
        <Dash className="dash-2" />
        <Approach
          step={2}
          body="Enable: Develop platform of proprietary data, technology and impact information solutions that boost financial inclusion and transparency"
          position="top"
          iconSize={94}
          icon="game-icons:plant-roots"
        />
        <Dash className="dash-3" />
        <Approach
          step={3}
          body="Scale: Proactively promote the efficient allocation of human and financial capital to enhance supply chains and strengthen processing capabilities"
          position="bottom"
          iconSize={85}
          icon="ph:tree-thin"
        />
        <Dash className="dash-4" />
        <Approach
          step={4}
          body="Leverage: Provide growth capital investment in high-potential agricultural processors, focused on export"
          position="top"
          iconSize={83}
          isSvg
          icon="/static/icons/lever.svg"
        />
        <RotatingGear className="gear-home" />
      </div>
      <div className="portfolio-section flex flex-row">
        <div>
          <div className="explore-title">Our Portfolio</div>
          <div className="portfolio-section-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <button className="flex flex-row items-center justify-center">
            <p className="portfolio-section-text">View Full Portfolio</p>{" "}
            <Image
              src={"/static/images/right-arrow.png"}
              alt="button-arrow"
              className="button-image-2"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="portfolio-images">
          <div className="flex flex-row items-center flex-wrap">
            <Image
              src={"/static/images/g-company.png"}
              alt="g-company"
              width={174.22}
              height={135}
            />
            <Image
              src={"/static/images/m-company.png"}
              alt="m-company"
              width={192.51}
              height={163}
            />
            <Image
              src={"/static/images/n-company.png"}
              alt="n-company"
              width={189.28}
              height={168}
            />
          </div>
        </div>
      </div>
      <div className="cards-section flex justify-between items-center">
        <Image
          src={"/static/images/mscard.png"}
          alt="mastercard"
          width={176}
          height={157}
        />
        <Image
          src={"/static/images/usaid.png"}
          alt="usaid"
          width={393}
          height={124}
        />
        <Image
          src={"/static/images/gsa.png"}
          alt="gas"
          width={354}
          height={164}
        />
      </div>
      <div className="action-section text-white">
        <div className="action-title">See Impact in Action </div>
        <div className="action-main flex flex-row">
          <Image
            src={"/static/images/woman-working.png"}
            alt="woman-working"
            width={668}
            height={421}
            className="action-image"
          />
          <BottomSlider>
            <ActionCard />
            <ActionCard />
          </BottomSlider>
        </div>
      </div>
      <Footer />
    </div>
  );
}
