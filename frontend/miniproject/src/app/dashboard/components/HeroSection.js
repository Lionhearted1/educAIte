'use client'
import "./components.css";
import styles from "./Switch.module.css";




const HeroSection = () => {
    return (
      <center>
        <div className="w-[100%] h-[38vh] relative bg-gradient-to-r from-purple-400 to-yellow-300 rounded-2xl">
            <div 
            className='backdrop-blur-lg bg-white/40 inline-block 
            rounded-lg p-2 m-5
             absolute left-0 text-white'>Good Morning Champ🏆</div>
            <p className='text-white/60 absolute  left-10 top-20 text-6xl font-extrabold'>
                Time to seize the day 🌞
                </p>
                <p className='text-white/60 absolute w-[70vh] text-left left-16 top-[65%] text-xl font-extrabold'>
                start Learning , Want revise the Topics
                 No worries We got your back ;)
                </p>
        </div>
       
      </center>
    );
};

export default HeroSection;
