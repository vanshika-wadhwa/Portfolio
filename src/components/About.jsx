import { motion } from "framer-motion";
import aboutImg from '../assets/abo.png'
import { ABOUT_TEXT } from '../constants'

const About = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'Users/DELL/OneDrive/Desktop/portfolio/src/assets/vanshika_resume.pdf'; // file path
        link.download = 'vanshika_resume.pdf'; //file name
        link.click();
      };
  return (
    
    <div className='border-b border-blue-800 pb-4'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>
            About
            <span className='text-netural-500'> Me</span>
        </motion.h1>
        <div className="flex flex-wrap">
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl h-64" src={aboutImg} alt="aboutImg" />
                </div>
                
            </motion.div>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:100}}
            transition={{duration:0.5}}
            className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6'>{ABOUT_TEXT}</p>
                    </div>
                    
                    <div className='w-full text-center'>
                        <button className='px-6 py-2 font-bold rounded-full bg-blue-600 text-white hover:bg-blue-700' onClick={handleDownload}>
                        Download Resume
                        </button>
                    </div>
            </motion.div>
            
        </div>
    </div>
  )
}

export default About


