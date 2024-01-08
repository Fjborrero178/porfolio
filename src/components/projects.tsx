import { FaGithub} from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";
function Projects(){
    return(
        <section className=" px-10 py-32" id="projects">
            <div className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">

                <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[180px] border-indigo-600 pb-2 "> Projects</h2>

                <div className="parent-section bg-slate-50 rounded-lg ">
                    

                    <div className="card flex flex-col lg:flex-row m-2  mx-auto px-0.5 max-w-[1000px]">
                    <img src="descarga.jpeg" alt="" />
                        <div className="card-details max-w-[1000px]"> 
                            <div className="top flex flex-row justify-center mx-32"> <h3> asdsmkamskdnianskdsakm </h3></div>
                            <div className="middle mx-10"> 
                                <p > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius amet beatae praesentium laudantium quos odio eveniet dolorum quidem ipsum. Modi aperiam tenetur harum magnam quidem at repellat veniam dolores itaque?
                                </p>

                                <div className="flex justify-left space-x-2 mt-2">
                                    <a className=" flex items-center underline text-teal-600 hover:text-teal-700" href="https://tenis-tournament.vercel.app/" target="_blank">https://tenis-tournament.vercel.app/<CiShare1 /> </a>
                                    <a className=" flex items-center text-2xl text-gray-600 hover:text-gray-800" href="" target="_blank"> Code  <FaGithub className= " m-1 "/> </a>
                                </div>
                               
                            </div>
                            <div className="bottom mx-10"> 
                                <div > 
                                    <p> Tecnologies:</p>
                                    <div className="flex justify-left space-x-4 mt-2 w-10 h-10 text-4xl "> 
                                        <img src="html5.svg" alt="Html"/>
                                        <img src="css.svg" alt="CSS" />
                                        <img src="javascript.svg" alt="JavaScript"  />
                                        <img src="typescript.svg" alt="TypeScript"  />
                                        <img src="nodejs.svg" alt="Nodejs" />
                                        <img src="nextjs.svg" alt="Nextjs"/>
                                        <img src="react.svg" alt="React" />
                                        <img src="mongodb.svg" alt="MongoDB" />
                                        <img src="tailwind.svg" alt="Tailwind" />
                                        
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    
                    
                </div> 





            </div>
        </section>
        
    )
}

export default Projects