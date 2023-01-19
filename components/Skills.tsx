import React from "react";
import {motion} from "framer-motion";
import Skill from "./Skill";

type Props = {};

const Skills = (props: Props) => { 
  const skillset = [
    {icon: './assets/images/html5.webp', name: 'HTML5'},
    {icon: './assets/images/css3.webp', name: 'CSS3'},
    {icon: './assets/images/js.webp', name: 'JavaScript'},
    {icon: './assets/images/ts.webp', name: 'TypeScript'},
    {icon: './assets/images/react.webp', name: 'ReactJS'},
    {icon: './assets/images/next.webp', name: 'Next.js'},
    {icon: './assets/images/redux.webp', name: 'Redux'},
    {icon: './assets/images/gql.webp', name: 'Graph QL'},
    {icon: './assets/images/axios.webp', name: 'Axios'},
    {icon: './assets/images/rest.webp', name: 'RESTful API'},
    {icon: './assets/images/rq.webp', name: 'React Query'},
    {icon: './assets/images/mui.webp', name: 'Material UI'},
    {icon: './assets/images/tw.webp', name: 'Tailwind CSS'},
    {icon: './assets/images/sass.webp', name: 'Sass'},
    {icon: './assets/images/git.webp', name: 'Git'},
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

      <div className='grid grid-cols-3 gap-5 md:grid-cols-4 md:gap-3'>
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
