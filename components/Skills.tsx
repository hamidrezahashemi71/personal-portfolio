import React from "react";
import {motion} from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => { 
  const skillset = [
    {icon: './assets/images/html5.png', name: 'HTML5'},
    {icon: './assets/images/css3.png', name: 'CSS3'},
    {icon: './assets/images/js.png', name: 'JavaScript'},
    {icon: './assets/images/ts.png', name: 'TypeScript'},
    {icon: './assets/images/react.png', name: 'ReactJS'},
    {icon: './assets/images/next.png', name: 'Next.js'},
    {icon: './assets/images/redux.png', name: 'Redux'},
    {icon: './assets/images/gql.png', name: 'Graph QL'},
    {icon: './assets/images/axios.png', name: 'Axios'},
    {icon: './assets/images/rest.png', name: 'RESTful API'},
    {icon: './assets/images/mui.png', name: 'Material UI'},
    {icon: './assets/images/tw.png', name: 'Tailwind CSS'},
    {icon: './assets/images/sass.png', name: 'Sass'},
    {icon: './assets/images/git.png', name: 'Git'},
  ]
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='relative min-h-[1100px] flex flex-col xl:flex-row justify-center items-center text-center md:text-left max-w-[2000px] xl:px-10 xl:space-y-0 mx-auto '>
      <h3 className='title'>Skills</h3>
      <h3 className='title top-36 tracking-[3px]'>
        I'm still learning and always will be ;)
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        {skillset.map((set, i) => (
          <Skill
            key={`skil${i}of${skillset.length}`}
            icon={set.icon}
            name={set.name}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
