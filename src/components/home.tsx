import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Home() {
 

    return (
     
      <main className="px-5 py-32" id="home">

        <div className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">  
            <p className="text-pink-600" > Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold " > Francisco Borrero Echeverria</h1>
            <p className=" py-4 max-w-[700px]" > I am a passionate Full Stack developer based in Barranquilla Colombia </p>    

            <div className="flex justify-left space-x-2 mt-2">
            <a className=" flex items-center " 
            href="https://github.com/Fjborrero178" 
            target="_blank" 
            rel="noopener noreferrer">
                <FaGithub className= "text-4xl text-gray-600 hover:text-gray-800"/>
            </a>
            <a 
            className=" flex items-center " 
            href="https://www.linkedin.com/in/francisco-borrero-echeverria" 
            target="_blank" 
            rel="noopener noreferrer">
            <FaLinkedin className="text-4xl text-blue-600 hover:text-blue-800"/>
            </a>
          </div> 
          
        </div>

      </main>
     
      
    )
  }
  
  export default Home