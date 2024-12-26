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



const Technology = () => {
  return (
    <div className='border-b border-blue-800 pb-24'>

      <h1 className='my-20 text-center text-4xl'>Technologies</h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className='text-7xl'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className='text-7xl text-green-500'/>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className='text-7xl text-green-500'/>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoPostgresql className='text-7xl text-sky-700'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className='text-7xl text-orange-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <MdCss className='text-7xl text-white bg-purple-700'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <IoLogoJavascript className='text-7xl text-yellow-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandCpp className='text-7xl text-purple-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className='text-7xl text-sky-700'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoFlask className='text-7xl text-gray-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandThreejs className='text-7xl text-gray-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className='text-7xl text-sky-700'/>
        </div>
        
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            < VscGithubInverted className='text-7xl text-white'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaGitSquare  className='text-7xl text-red-600'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <VscVscode className='text-7xl text-sky-700'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiOverleaf className='text-7xl text-green-700'/>
        </div>
        
      </div>
      
    </div>
  )
}

export default Technology
