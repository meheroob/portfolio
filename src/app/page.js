"use client"

import Image from 'next/image';
import deved from '../../public/dev-ed-wave.png';
import sticker from '../../public/sticker.png';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';

import w4 from '../../public/w4.png';

import w1 from '../../public/w1.png';
import w2 from '../../public/w2.png';
import w31 from '../../public/w3.1.png';


import {useState} from 'react';


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode?'dark':''}>
    <main className='bg-white px-10 md:px-20 lg:px-40 duration-500 dark:bg-gray-900 dark:duration-500'>
      <section className='min-h-screen'>
        <nav className='mb-12 py-10 flex justify-between '>
          <h1 className='text-xl font-burtons text-black dark:text-white dark:duration-500 duration-500'>Developed by Meheroob</h1>
          <ul className='flex items-center'>
            <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl text-black dark:text-white dark:duration-500 duration-500"
                />
            </li>
            <li>
              <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 dark:duration-500 duration-500' href="/cv.pdf" download="cv">Resume</a>
            </li>
          </ul>
        </nav>

        <div className='text-center p-10'>
          <h2 className='text-5xl md:text-6xl py-2 text-teal-600 font-medium'>Meheroob Ahmed</h2>
          <h3 className='text-2xl md:text-3xl py-2 text-black dark:text-white dark:duration-500 duration-500'>Developer and Designer</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-lg dark:text-white dark:duration-500 duration-500'>
            Hi! Welcome to my site. I am Meheroob and I currently reside in the United Kingdom. I have completed my undergraduate in Computer Science and Engineering followed by my postgraduate in Artificial Intelligence. My specialism lies in Data Science and Machine Learning along with a deep knowledge in web development. Feel free to look at my work. Thanks!

          </p>
        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href='https://www.linkedin.com/in/meheroob/'><AiFillLinkedin className='hover:cursor-pointer'/></a>

          <a href='https://www.github.com/meheroob/'><AiFillGithub className='hover:cursor-pointer'/></a>

          <a href='#'><AiFillTwitterCircle className='hover:cursor-pointer'/></a>
          
        </div>

        <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden md:h-96 md:w-96'>
          <Image src={sticker} layout='fill' objectFit='cover'/>
        </div>
      </section>




      <section className='mt-10'>
        <div className='text-center'>
          <h3 className='text-5xl py-1 text-black dark:text-white dark:duration-500 duration-500'>
            Skills Overview
          </h3>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white dark:duration-500 duration-500'>
            I love exploring new technologies every day, be it in tech or the creative field. I possess skills in a wide range of tools which might be of your interest.
          </p>
          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white dark:duration-500 duration-500'>
            Although I have my education in STEM, the creative field is very dear to me and I have extensive freelancing experience in the field of designing. I have worked with the following technologies and I am learning new technologies every day.
          </p>
        </div>

        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap max-w-64 mx-auto'>


        <div className='basis-1/4 flex-1'>
        <img width="144" height="144" src="https://img.icons8.com/fluency/144/javascript.png" alt="javascript"/>
        </div>

        <div className='basis-1/4 flex-1'>
        <img width="144" height="144" src="https://img.icons8.com/color/144/html-5--v1.png" alt="html-5--v1"/>
        </div>

        <div className='basis-1/4 flex-1'>
        <img width="144" height="144" src="https://img.icons8.com/color/144/tailwind_css.png" alt="tailwind_css"/>
        </div>

        <div className='basis-1/4 flex-1'>
        <img width="144" height="144" src="https://img.icons8.com/color/144/nodejs.png" alt="nodejs"/>
        </div>

        <div className='basis-1/4 flex-1'>
        <img width="144" height="144" src="https://img.icons8.com/fluency/144/python.png" alt="python"/>
        </div>

        <div className='basis-1/4 flex-1'>
        <img width="144" height="144" src="https://img.icons8.com/color/144/tensorflow.png" alt="tensorflow"/>
        </div>

        <div className='basis-1/4 flex-1'>
        <img className='dark:contrast-0' width="144" height="144" src="https://img.icons8.com/ios-filled/144/mysql-logo.png" alt="mysql-logo" />
        </div>

        <div className='basis-1/4 flex-1'>
        <img width="144" height="144" src="https://img.icons8.com/color/144/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
        </div>
        
        </div>


        </section>




        <section>
            <div className='text-center mt-10'>
              <h1 className='text-5xl text-gray-800 dark:text-white dark:duration-500 duration-500'>Web Design</h1>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1 ">
                <Image
                  className="rounded-lg object-cover hover:scale-150 hover:duration-500 duration-500"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={w4}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover hover:scale-150 hover:duration-500 duration-500"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={w1}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover hover:scale-150 hover:duration-500 duration-500"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={w2}
                />
              </div>
              <div className="basis-1/3 flex-1">
                <Image
                  className="rounded-lg object-cover hover:scale-150 hover:duration-500 duration-500"
                  width={"100%"}
                  height={"100%"}
                  layout="responsive"
                  src={w31}
                />
              </div>
              
              
            </div>
            </div>
        </section>
    
        <div className='text-center p-10'>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl mx-auto max-w-lg dark:text-white dark:duration-500 duration-500'>
            Thank you for visiting. These were just samples of the web applications. All the codes for the full working version is available on my <a href='https://www.github.com/meheroob/'><span className='text-cyan-500'>Github</span></a> account.
          </p>
        </div>

    </main>
    </div>
  )
}
