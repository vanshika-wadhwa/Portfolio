import {PROJECTS} from "../constants"
import { motion } from "framer-motion";


const Projects = () => {
  return (
    <div className='border-b border-blue-800 pb-4'>
      <motion.h1
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Projects</motion.h1>
        <div>
            {PROJECTS.map((project, index)=>(
                <div key={index} className="m-8 flex flex-wrap lg:justify-center">
                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                     className="w-full lg:w-1/4">
                        <img 
                            src={project.image}
                            width={150}
                            height={150}                
                            alt={project.title} 
                            className="mb-6 rounded"
                        />
                    </motion.div>
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:1}}
                className="w-full max-w-xl lg:w-3/4">
                    <h6 className="mb-2 font-semibold">{project.title}</h6>
                    <p className="mb-4 text-neutral-400">{project.description}</p>
                    {project.technologies.map((tech, index)=>(
                        <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800">{tech}</span>
                    ))}
                   {/* Button to view code */}
              <div className="mt-4">
                <a href={project.code} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    View Code
                  </button>
                </a>
              </div>

              {/* Button to view demo */}
              <div className="mt-4">
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                    View Demo
                  </button>
                </a>
              </div>
                </motion.div>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Projects


