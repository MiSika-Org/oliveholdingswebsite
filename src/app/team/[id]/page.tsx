"use client";
import Header from "@/components/Header";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { team } from "@/data/team";
import { useParams, useRouter } from "next/navigation";

interface IndividualProps {}

const Individual: React.FC<IndividualProps> = ({}) => {
  const params = useParams();
  const { push } = useRouter();

  console.log({ p: params });
  const individual = team.find((person) => person.id === params.id);
  console.log({ individual });

  useEffect(() => {
    if (!individual) {
      push("/hello-nextjs");
    }
  }, [individual]);
  return (
    <div>
      <Header />
      <div className="flex flex-col team">
        <div className="flex team-focus">
          {/* <div className="relative team-focus-image">
            <Image
              src={`/static/images/${individual?.image}`}
              alt={"-" + "icon-approach"}
              // width={719.05}
              // height={650.67}
              className="focus-image"
            />
            <div></div>
            <div className="team-focus-avatar" />
          </div> */}
          <div
            className={`team-focus-left team-image team-image-${individual?.id}`}
            style={{
              backgroundImage: `url(/static/images/${individual?.image})`,
            }}
          ></div>
          <div className="team-focus-right">
            <div className="team-focus-title">{individual?.name}</div>
            <div className="team-focus-sub-title ">{individual?.title}</div>
            <Icon icon="mdi-linkedin" width={40} color="62b46a" />
            <div className="team-details">
              <ul>
                {individual?.points.map((p, index) => (
                  <li key={index}>{p}</li>
                ))}
                {/* <li>
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
                </li> */}
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
