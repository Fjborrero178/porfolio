import { FaGithub} from "react-icons/fa6";
import { CiShare1 } from "react-icons/ci";


function Projects(){
    return(
        <section className=" px-10 py-32" id="projects">
            <div className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">

                <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[180px] border-pink-600 pb-2 "> Projects</h2>

                <div className="parent-section bg-slate-50 rounded-lg ">
                    

                    <div className="card flex flex-col lg:flex-row m-2  mx-auto px-0.5 max-w-[1000px]">
                    
                        <img src="tenisweb.png" className=" w-80"alt="" />
                        <div className="card-details max-w-[1000px]"> 
                            <div className="top flex flex-row justify-center mx-32"> <h3> Tenis Tournament </h3></div>
                            <div className="middle mx-10"> 
                                <p>
                                It is a web page that presents the registration to tennis tournaments and matches, through the creation of a user to enter the matches and to participate in the tournaments will be registered if and only if they have already registered on the page so that the admin can register them.
                                </p>
                                <div className="flex justify-left space-x-2 mt-2">
                                    <a className=" flex items-center underline text-pink-600 hover:text-pink-700" href="https://tenis-tournament.vercel.app/" target="_blank">https://tenis-tournament.vercel.app/<CiShare1 /> </a>
                                    <a className=" flex items-center text-2xl text-gray-600 hover:text-gray-800" href="https://github.com/Fjborrero178/Tenis-Tournament" target="_blank">  <FaGithub className= " m-1 "/> </a>
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