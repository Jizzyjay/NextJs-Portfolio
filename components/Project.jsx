import React from "react";
import HouseImg from "../public/assets/image/projects/real.png";
import FudoImg from "../public/assets/image/projects/fudo.png";
import RoboImg from "../public/assets/projects/robo.jpg";
import ProjectItem from "./ProjectItem";
import eventImg from "../public/assets/image/projects/Event.jpg";
import jayImg from "../public/assets/image/projects/jayStore.jpg";
import amazon from "../public/assets/image/projects/amazon.png";
import Dash from "../public/assets/image/projects/dash.jpg";
import Movix from "../public/assets/image/projects/movix.jpg";
// import tiktok from "../public/assets/image/projects/tiktok.jpg";
import threads from "../public/assets/image/projects/threads.jpg";
import gallery from "../public/assets/image/projects/gallery.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#008037]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* <ProjectItem
            title="Tiktok-Clone"
            backgroundImg={tiktok}
            projectUrl="/Tiktok"
            tech="NextJs"
          /> */}
          <ProjectItem
            title="Threads-Clone"
            backgroundImg={threads}
            projectUrl="/Threads"
            tech="NextJs"
          />
          <ProjectItem
            title="Amazon-Clone"
            backgroundImg={amazon}
            projectUrl="/Amazon"
            tech="NextJs"
          />
          <ProjectItem
            title="Gallery"
            backgroundImg={gallery}
            projectUrl="/Gallery"
            tech="NextJs"
          />
          <ProjectItem
            title="Movix"
            backgroundImg={Movix}
            projectUrl="/Movix"
            tech="Next JS"
          />
          <ProjectItem
            title="JayEvent"
            backgroundImg={eventImg}
            projectUrl="/Event"
            tech="Next JS"
          />
          <ProjectItem
            title="JayStore"
            backgroundImg={jayImg}
            projectUrl="/JayStore"
            tech="React JS"
          />
          <ProjectItem
            title="House Search"
            backgroundImg={HouseImg}
            projectUrl="/House"
            tech="React JS"
          />
          <ProjectItem
            title="Fudo"
            backgroundImg={FudoImg}
            projectUrl="/Fudo"
            tech="React JS"
          />
          <ProjectItem
            title="Robo App"
            backgroundImg={RoboImg}
            projectUrl="/Robo"
            tech="React JS"
          />
          <ProjectItem
            title="Dashboard"
            backgroundImg={Dash}
            projectUrl="/NextDashboard"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
