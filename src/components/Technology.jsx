import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {BiLogoPostgresql} from 'react-icons/bi'
import {DiRedis} from 'react-icons/di'
import { VscGithubInverted } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { MdCss } from "react-icons/md";
import { IoLogoJavascript } from "react-icons/io5";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { BiLogoFlask } from "react-icons/bi";
import { TbBrandThreejs } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitSquare } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiOverleaf } from "react-icons/si";
// import { animate, motion } from "motion/react"
import { motion } from "framer-motion";


const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
});


const Technology = () => {
  return (

    <div className='border-b border-blue-800 pb-24'>

      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>

      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className='text-7xl'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-7xl text-green-500'/>
        </motion.div>
        
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-500'/>
        </motion.div>
        
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className='text-7xl text-sky-700'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className='text-7xl text-orange-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <MdCss className='text-7xl text-white bg-purple-700'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className='text-7xl text-yellow-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandCpp className='text-7xl text-purple-500'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className='text-7xl text-sky-700'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoFlask className='text-7xl text-gray-400'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandThreejs className='text-7xl text-gray-400'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className='text-7xl text-sky-700'/>
        </motion.div>
        
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            < VscGithubInverted className='text-7xl text-white'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitSquare  className='text-7xl text-red-600'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <VscVscode className='text-7xl text-sky-700'/>
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiOverleaf className='text-7xl text-green-700'/>
        </motion.div>
        
      </motion.div>
      
    </div>
  )
}

export default Technology
