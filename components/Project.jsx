import React from 'react';
import HouseImg from '../public/assets/image/projects/real.png';
import DashboardImg from '../public/assets/image/projects/dash.jpg';
import LearnCodeImg from '../public/assets/image/projects/learn.png'
import FudoImg from '../public/assets/image/projects/fudo.png'
import altImg from "../public/assets/image/projects/alt.png";
import RoboImg from '../public/assets/projects/robo.jpg'
import ProjectItem from './ProjectItem';
import chatImg from '../public/assets/image/projects/jay.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#008037]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='JayChat'
            backgroundImg={chatImg}
            projectUrl='/Chat'
            tech='React JS'
          />
          <ProjectItem
            title='House Search'
            backgroundImg={HouseImg}
            projectUrl='/House'
            tech='React JS'

          />
          <ProjectItem
            title='Fudo'
            backgroundImg={FudoImg}
            projectUrl='/Fudo'
            tech='React JS'

          />
          <ProjectItem
            title='LearnCode'
            backgroundImg={LearnCodeImg}
            projectUrl='/LearnCode'
            tech='Next JS'

          />
          <ProjectItem
            title='AltSchool Exam(Counter App)'
            backgroundImg={altImg}
            projectUrl='/Alt'
            tech='React'

          />
          <ProjectItem
            title='Robo App'
            backgroundImg={RoboImg}
            projectUrl='/Robo'
            tech='React JS'

          />
          <ProjectItem
            title='Dashboard'
            backgroundImg={DashboardImg}
            projectUrl='/Dashboard'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;