import React from "react";
import {motion} from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

const Experience = (props: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='relative min-h-screen flex flex-col overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
      <h3 className='title'>Experience</h3>
      <div className='mt-32 w-full flex gap-5 overflow-x-scroll xl:flex-wrap xl:gap-2 xl:justify-center xl:overflow-x-hidden p-10 snap-x snap-mandatory'>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
