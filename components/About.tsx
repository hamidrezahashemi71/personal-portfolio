import React from "react";
import {motion} from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='relative min-h-[1100px] md:min-h-[800px] max-w-7xl px-10 mx-auto flex flex-col md:flex-row items-center justify-evenly text-center md:text-left'>
      <h3 className='title'>About</h3>
      <motion.img
        initial={{x: -400, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        viewport={{once: false}}
        transition={{duration: 1.2}}
        src='/assets/images/about.webp'
        alt='about'
        className='flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-0 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold mb-4'>
          Here is a{" "}
          <span className='underline decoration-orangish/50 '>little </span>
          background
        </h4>
        <p className='text-sm '>
          Hey! I'm Hamidreza. I was born in Zanjan, Iran and currently living in Tehran. I'd worked with C++ language in university but it was a brief experience. Suddenly last year programming and I rebounded by accident which I call it a miracle. I was not happy with my job and my laptop came in for rescue. After that learning new things everyday became my lifestyle and I moved to Tehran to seek my life in programming. I find myself loving JavaScript and web development and I think it's the way of living I always have been looking for my entire life. My goal is to develop and make progress everyday and learn new things and share it with others!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
