import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

type Props = {}; 

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[350px] sm:w-[500px] md:w-[600px] xl:w-1/3 snap-center bg-secondary p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200'>
      <motion.img
        initial={{y: -100, opacity: 1}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1.5}}
        viewport={{once: true}}
        src='/assets/images/makeen.webp'
        alt='makeen'
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>Front-End developer</h4>
        <p className='font-bold text-xl mt-1'>Makeen Ideal Institution</p>
        <div className='flex space-x-2 my-2'>
          <Image
            src={"/assets/images/react.webp"}
            alt='react'
            width={40}
            height={40}
            className='rounded-full'
          />
        </div>
        <p className='uppercase py-5 text-grayish '>
          June 2022 - January 2023
        </p>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Project based web development</li>
          <li>Worked in a team</li>
          <li>Interacted with UI/UX designers and backend-developers</li>
          <li>Learnt how to learn!</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
