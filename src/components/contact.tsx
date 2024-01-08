
function Contact(){


    return (
        <section className=" px-10 py-32" id="contact">
            <div  className="max-w-[1000px] mx-auto px-10 flex flex-col justify-center h-full">
                <h2 className="text-4xl font-bold mb-10 border-b-[5px] w-[180px] border-pink-600 pb-2 "> Contact</h2>
                <form className="space-y-8">
                    <div>

                        <label htmlFor=""
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Email:
                        </label>

                        <input type="email" 
                        name="" 
                        id="" 
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                        placeholder=""/>
                    </div>

                    <div>
                        <label htmlFor="" 
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Email:</label>
                        <input type="text" 
                        name="" 
                        id="" 
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                        placeholder=""/>
                    </div>
                    <div className="sm:col-span-2">
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                        Your message</label>
                    <textarea id="message"  
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                    placeholder="Leave a comment..."></textarea>
                    </div>
                </form>
                <button> Send</button>
            </div>
        </section>
    )

}

export default Contact