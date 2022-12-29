import React from "react";
import {motion} from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='relative min-h-screen max-w-7xl px-10 mx-auto flex flex-col md:flex-row items-center justify-evenly text-center md:text-left'>
      <h3 className='title'>About</h3>
      <motion.img
        initial={{x: -400, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        viewport={{once: false}}
        transition={{duration: 1.2}}
        src='/assets/images/about.png'
        alt='about'
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]'
      />
      <div className='space-y-0 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold mb-4'>
          Here is a{" "}
          <span className='underline decoration-orangish/50 '>little </span>
          background
        </h4>
        <p className='text-sm '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          dolorem quisquam magni nemo quidem nobis itaque, odit, sapiente ad
          vero delectus omnis? Hic exercitationem repellendus fugit. Repellendus
          porro nam itaque vitae quam autem aspernatur at optio ratione, eius,
          suscipit tenetur!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
