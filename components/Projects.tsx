import React from "react";
import {motion} from "framer-motion";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='relative min-h-[1100px] flex flex-col justify-evenly items-center mx-auto z-0 overflow-hidden text-left md:flex-row max-w-full '>
      <h3 className='title'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snpa-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{y: -300, opacity: 1}}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              src='./assets/images/project.jpg'
              alt='project'
              className='w-72'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className='underline decoration-orangish/50'>
                  Case study {i + 1} of {projects.length}:
                </span>{" "}
                Blogging app
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis blanditiis earum, voluptatibus debitis consectetur
                perspiciatis esse sit dolores itaque quidem tempora, ipsam
                necessitatibus qui accusantium. Ratione ab corrupti qui rerum.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-orangish/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
};

export default Projects;
