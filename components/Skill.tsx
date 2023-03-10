import React from "react";
import {motion} from "framer-motion";

type Props = {
  // directionLeft: boolean;
  icon: string;
  name: string
};

const Skill = ({icon, name}: Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1.5}}
        src={icon}
        alt='skill-logo'
        className='rounded-full bg-primary border border-grayish p-2 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-lg font-bold text-black opacity-100'>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
