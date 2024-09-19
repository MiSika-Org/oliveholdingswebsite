import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ActionCard from "@/components/home/ActionCard";
import Approach from "@/components/home/Approach";
import BottomSlider from "@/components/home/BottomSlider";
import Dash from "@/components/home/Dash";
import HomeSlide from "@/components/home/HomeSlide";
import RotatingGear from "@/components/RotatingGear";
import { bottomSlider, slider } from "@/data/home";
import Image from "next/image";
// import { loadEnvConfig } from "@next/env";

// const projectDir = process.cwd();
// loadEnvConfig(projectDir);

export default function IndexPage() {
  return (
    <div>
      <div className="home-slide">
        <Header fromHome />
        <div className="relative">
          <div className="overlay" />
          <div className="home">
            <div className="home-title">
              A Transformative Platform Connecting West Africa To a $155B Global
              Food & Agribusiness Market
            </div>
            <div className="home-subtitle">
              Building manufacturing for food and agribusiness across west
              Africa
            </div>
            <a
              href="https://z05wpu23433.typeform.com/to/mNjhGf10"
              className="home-button flex flex-row items-center justify-center"
            >
              <p>Invest with Us</p>{" "}
              <Image
                src={"/static/images/right-arrow.png"}
                alt="button-arrow"
                className="button-image"
                width={24}
                height={24}
              />
            </a>
          </div>
          <BottomSlider autoPlay swipeable={false}>
            {slider.map((singleSlider, index) => (
              <HomeSlide slide={singleSlider} key={index} />
            ))}
          </BottomSlider>
        </div>
      </div>
      <div className="explore h-screen relative">
        <div className="explore-title">Explore our approach</div>
        {/* ? */}
        {/* <Dash className="dash-1" /> */}
        <div className="approach-body home-approach-body">
          We are a passionate team of operators and investors, working together
          to build sustainable agribusinesses
        </div>
        <Approach
          step={1}
          body="Provide growth capital investment in high-potential agricultural processors, focused on export"
          position="bottom"
          iconSize={84.5}
          isSvg
          icon="/static/icons/harvest.svg"
        />
        <Dash className="dash-2" />
        <Approach
          step={2}
          body="Develop platform of proprietary data, technology and impact information solutions that boost financial inclusion and transparency"
          position="top"
          iconSize={94}
          icon="game-icons:plant-roots"
        />
        <Dash className="dash-3" />
        <Approach
          step={3}
          body="Proactively promote the efficient allocation of human and financial capital to enhance supply chains and strengthen processing capabilities"
          position="bottom"
          iconSize={85}
          icon="ph:tree-thin"
        />
        <Dash className="dash-4" />
        <Approach
          step={4}
          body="Provide growth capital investment in high-potential agricultural processors, focused on export"
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
            We currently manage a portfolio of three companies, all focused on
            agricultural processing. Our value chains include citrus, cocoa, and
            shea, key sectors where we have built strong expertise. Each of our
            investments is strategically aligned with our mission to transform
            agribusiness in West Africa by building companies that scale and
            drive economic growth.
          </div>
          <a
            href="/portfolio"
            className="inline-flex flex-row items-center justify-center"
          >
            <p className="portfolio-section-text">View Full Portfolio</p>{" "}
            <Image
              src={"/static/images/right-arrow.png"}
              alt="button-arrow"
              className="button-image-2"
              width={24}
              height={24}
            />
          </a>
        </div>
        <div className="portfolio-images">
          <div className="flex flex-row items-center flex-wrap">
            <Image
              src={"/static/images/n4g.png"}
              alt="g-company"
              width={174.22}
              height={135}
            />
            <Image
              src={"/static/images/world.png"}
              alt="m-company"
              width={192.51}
              height={163}
            />
            <Image
              src={"/static/images/cgl.png"}
              alt="n-company"
              width={189.28}
              height={168}
            />
          </div>
        </div>
      </div>
      <div className="cards-section ">
        <div className="explore-title">Partners</div>
        <div className="flex justify-evenly items-center flex-wrap cards-section-main">
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
          <Image
            src={"/static/images/norfund.jpg"}
            alt="gas"
            width={354}
            height={164}
          />
          <Image
            src={"/static/images/giz.jpg"}
            alt="gas"
            width={254}
            height={164}
          />
        </div>
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
          <div className="relative">
            <div
              className="action-top action-top-1"
              // style={}
            >
              STORIES
            </div>
            <BottomSlider autoPlay>
              {bottomSlider.map((slide, index) => (
                <ActionCard key={index} slide={slide} />
              ))}
              {/* <ActionCard />
            <ActionCard /> */}
            </BottomSlider>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
