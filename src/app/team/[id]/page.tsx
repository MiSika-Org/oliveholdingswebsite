import Header from "@/components/Header";
import React from "react";
import Image from "next/image";

interface IndividualProps {}

const Individual: React.FC<IndividualProps> = ({}) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col team">
        <div className="flex team-focus">
          <div className="relative team-focus-image">
            <Image
              src={"/static/images/focus_image.png"}
              alt={"-" + "icon-approach"}
              width={719.05}
              height={650.67}
              className="focus-image"
            />
            <div className="team-focus-avatar" />
          </div>
          <div className="team-focus-right">
            <div className="team-focus-title">Kofi Kwakwa </div>
            <div className="team-focus-sub-title ">Chairman & CEO</div>
            <Image
              src={"/static/images/mdi_linkedin.png"}
              alt="button-arrow"
              width={40}
              height={40}
            />
            <div className="team-details">
              <ul>
                <li>
                  Partner at African Capital Alliance (ACA) and member of
                  Investment Committee for over a decade. ACA, a pioneer in West
                  African investing, has raised and invested over $1bn across
                  West Africa over the last 20+ years
                </li>
                <li>Founder and Director of Sagevest Capital</li>
                <li>
                  Former Director for Strategic Investments, Standard Bank Group
                </li>
                <li>
                  Chairman of the Ghana International School Board; Former
                  Chairman and Director Emeritus at Ashesi University
                </li>
                <li>
                  MBA, Harvard; BA (Math, Economics, and Food Policy),
                  Swarthmore College
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Individual;
