
function About(){

    return(
    <section className=" px-10 py-32" id="about"> 
        <div  className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-pink-600 pb-2"> About Me</h2>

            <div className="md:flex md:max-w-2xl "> 
            
                <p className="pt-16 mt-4"> As a Junior Full Stack Software Developer passionate about crafting seamless digital experiences. I specialize in JavaScript, TypeScript, React, HTML, CSS (with a touch of Tailwind), and Python. A strong team player, I thrive on collaboration and effective communication. I'm dedicated to meeting client requirements and staying on the cutting edge of technology. </p>
                
            </div>
            
           
            <div > 
                <h5> Tecnologies:</h5>
                <div className="flex justify-left space-x-6 mt-2 w-10 h-10 "> 
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
    </section>
    )

}

export default About