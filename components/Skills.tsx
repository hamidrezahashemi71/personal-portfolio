import React from "react";
import {motion} from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='relative min-h-[1100px] flex flex-col xl:flex-row justify-center items-center text-center md:text-left max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto '>
      <h3 className='title'>Skills</h3>
      <h3 className='title top-36 tracking-[3px]'>
        Hover over a skill for current progress
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
};

export default Skills;
