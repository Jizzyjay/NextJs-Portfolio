import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/image/code.jpg';

const About = () => {
    
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#008037]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I specialize in building mobile responsive front-end UI applications that connect with API&apos;s. My passion lies in learning new technologies and exploring the different possibilities for any given task. I am highly proficient in front-end development, utilizing HTML, CSS, Javascript, and React, and I am confident in my ability to quickly learn any new tech stack as needed. I understand that the mark of a great developer is not tied to one particular language, but to the ability to choose the best tool for the job and apply it accordingly.
          </p>
          {/* <p className='py-2 text-gray-600'>
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I run Code Commerce, a Youtube channel where I teach web
            developement and various front-end technologies.
          </p> */}
          <br />
          <Link href='/#projects'>
            <p className='py-2 text-green-400 underline cursor-pointer'>
              Check some of my projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
        
      </div>
    </div>
  );
};

export default About;