import Header from "@/components/Header";
import React from "react";

interface TeamProps {}

const Team: React.FC<TeamProps> = ({}) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col team">
        <div className="top-section">
          <div className="top-section-item">
            <div className="top-section-item-title">Meet the team</div>
            <div className="top-section-item-body">
              This is where aspiration meets innovation, candor fuels
              collaboration and impossible surrenders to teamwork. We champion
              the bold to achieve the extraordinary.
            </div>
          </div>
        </div>
        <div className="team-body">
          <div className="team-title">Leadership</div>
          <div className="flex flex-row team-images">
            <a href="/team/1" className="team-image"></a>
            <a href="/team/1" className="team-image"></a>
          </div>
        </div>
        <div className="team-body-2">
          <div className="team-title">Management</div>
          <div className="flex flex-row team-images">
            <a href="/team/1" className="team-image"></a>
            <a href="/team/1" className="team-image"></a>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Team;
