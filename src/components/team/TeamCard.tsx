import React from "react";
import { Icon } from "@iconify/react";

interface TeamCardProps {
  name: string;
  title: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, title }) => {
  return (
    <a href="/team/1" className="team-image">
      <div className="team-image-card">
        <div>
          <div className="team-image-card-title">{name}</div>
          <div className="team-image-card-title">{title}</div>
        </div>
        <Icon icon="mdi-linkedin" width={51} />
      </div>
    </a>
  );
};

export default TeamCard;
