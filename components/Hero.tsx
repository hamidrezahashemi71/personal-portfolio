import React from "react";
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, My name is Hamidreza",
      "A Junior JavaScript and ReactJS developer",
      "<LoveToLearnForLife />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
      <BackgroundCircles />
      <Image
        width={128}
        height={128}
        src={"/assets/images/profile.webp"}
        alt={"profile"}
        className='relative rounded-full mx-auto object-cover'
      />
      <div className='z-20 w-full h-[200px] '>
          <Link target={"_blank"} href={'https://drive.google.com/file/d/1qdL3BQnGEIYTeTa0_Kj_axC2OCWllIDb/view'}>
        <div className="relative mx-auto h-8 w-32 flex justify-center items-center mb-8">
            <div className="i h-8 w-32 bg-purple-600 items-center rounded-xl shadow-2xl cursor-pointer absolute overflow-hidden transform hover:scale-x-110 hover:scale-y-105 transition duration-300 ease-out"></div>
            <div  className="text-center text-white font-semibold z-10 pointer-events-none">GET CV</div>
          <span className="absolute flex h-6 w-6 top-0 right-0 transform translate-x-2.5 -translate-y-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="absolute inline-flex rounded-full h-6 w-6 bg-purple-500"></span>
          </span>
        </div>
          </Link>
        <h2 className='text-sm uppercase text-grayish pb-2 tracking-[15px]'>
          Web Developer
        </h2>
        <h1 className='text-3xl font-semibold px-10'>
          <span className='mr-3 font-Code'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>
      <div className='z-50 '>
        <Link href='#about'>
          <button className='heroButton'>About</button>
        </Link>
        <Link href='#experience'>
          <button className='heroButton'>Experience</button>
        </Link>
        <Link href='#skills'>
          <button className='heroButton'>Skills</button>
        </Link>
        <Link href='#projects'>
          <button className='heroButton'>Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
