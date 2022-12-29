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
        src={"/assets/images/profile.jpg"}
        alt={"profile"}
        className='relative rounded-full mx-auto object-cover'
      />
      <div className='z-20 '>
        <h2 className='text-sm uppercase text-grayish pb-2 tracking-[15px]'>
          Web Developer
        </h2>
        <h1 className='text-5xl lg:6xl font-semibold px-10'>
          <span className='mr-3 font-Code'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
      </div>
      <div className='pt-5 z-50'>
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
