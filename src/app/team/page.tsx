import Header from "@/components/Header";
import TeamCard from "@/components/team/TeamCard";
import { team } from "@/data/team";
import React from "react";

interface TeamProps {}

const leadership = team.filter((t) => t.leader);
const managementTeam = team.filter((t) => !t.leader);

const Team: React.FC<TeamProps> = ({}) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col team">
        <div className="top-section">
          <div className="overlay" />
          <div className="top-section-item">
            <div className="top-section-item-title">Meet the team</div>
            <div className="top-section-item-body">
              We are a dedicated and diverse team of operators and investors,
              with a shared passion for building sustainable agribusinesses that
              economically empower local communities across West Africa and give
              women a seat at the table at all levels of the organization
              including within our portfolio companies.
            </div>
          </div>
        </div>
        <div className="team-body">
          <div className="team-title">Leadership</div>
          <div className="flex flex-row flex-wrap team-images">
            {leadership.map((person, index) => (
              <TeamCard key={index} data={person} />
            ))}
          </div>
        </div>
        <div className="team-body-2">
          <div className="team-title">Management</div>
          <div className="flex flex-row flex-wrap team-images">
            {managementTeam.map((person, index) => (
              <TeamCard key={index} data={person} />
            ))}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Team;
