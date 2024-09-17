import React from "react";
import { Icon } from "@iconify/react";

interface TeamCardProps {
  data: {
    name: string;
    title: string;
    points: string[];
    leader: boolean;
    id: string;
    image: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ data }) => {
  return (
    <a
      href={`/team/${data.id}`}
      className={`team-image team-image-${data.id}`}
      style={{
        backgroundImage: `url(/static/images/${data.image})`,
      }}
    >
      {/* <div className="overlay" /> */}
      <div className="team-image-card">
        <div>
          <div className="team-image-card-title">{data.name}</div>
          <div className="team-image-card-title">{data.title}</div>
        </div>
        <Icon icon="mdi-linkedin" width={51} />
      </div>
    </a>
  );
};

export default TeamCard;
